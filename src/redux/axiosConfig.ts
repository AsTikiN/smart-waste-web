import { toast } from "react-toastify";
import { updateIsAuthorized } from "./actions/authActions";
import { updateLoader } from "./actions/appActions";

const errorToastId = "session-expired";

const options = {
  interceptors: {
    request: [
      ({ getState, dispatch }: any, config: any) => {
        const store = getState();
        const loader = config.reduxSourceAction.payload.loader;
        dispatch(updateLoader({ loader, status: true }));

        const token = store?.auth?.token;
        if (token && !config.headers.Authorization) {
          config.headers.Authorization = token ? token : null;
        }
        return config;
      },
    ],
    response: [
      {
        success: function ({ dispatch }: any, response: any) {
          const loader = response.config.reduxSourceAction.payload.loader;
          dispatch(updateLoader({ loader, status: false }));
          return response;
        },
        error: function ({ dispatch }: any, error: any) {
          const loader = error.config.reduxSourceAction.payload.loader;
          dispatch(updateLoader({ loader, status: false }));

          if (error.response.status === 401) {
            dispatch(updateIsAuthorized({ status: false }));
            if (!toast.isActive(errorToastId))
              toast.warn(error.response.data || "Session expired! Please re-login.", { toastId: errorToastId });

            return Promise.reject(error);
          }

          return Promise.reject(error);
        },
      },
    ],
  },
};

export default options;

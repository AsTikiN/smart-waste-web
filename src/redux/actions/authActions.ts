import { Loaders } from "redux/types/loaders";

export const UPDATE_IS_AUTHORIZED = "UPDATE_IS_AUTHORIZED";
export const CLEAR_AUTH_DATA = "CLEAR_AUTH_DATA";
export const SET_IS_UPDATING_USER_INFO = "SET_IS_UPDATING_USER_INFO";
export const CONFIRM_EMAIL_SERVER = "CONFIRM_EMAIL_SERVER";
export const LOGIN_USER_SERVER = "LOGIN_USER_SERVER";
export const CREATE_USER_SERVER = "CREATE_USER_SERVER";
export const SEND_RECOVERY_LINK = "SEND_RECOVERY_LINK";
export const LOGOUT = "LOGOUT";
export const CONFIRM_RESET_PASSWORD = "CONFIRM_RESET_PASSWORD";
export const CLEAR_PERSISTED_DATA = "CLEAR_PERSISTED_DATA";
export const LOGIN_USER_WITH_GOOGLE = "LOGIN_USER_WITH_GOOGLE";
export const AUTH_WHOP = "AUTH_WHOP";

interface UpdateStatusProps {
  status: boolean;
}

export const logout = () => ({
  type: LOGOUT,
  payload: {},
});

export const updateIsAuthorized = ({ status }: UpdateStatusProps) => ({
  type: UPDATE_IS_AUTHORIZED,
  payload: { status },
});

export const createUserServer = ({ username, email, password }: any) => ({
  type: CREATE_USER_SERVER,
  payload: {
    request: {
      method: "POST",
      url: "auth/signup",
      data: {
        username,
        email,
        password,
      },
    },
    loader: Loaders.signUp,
  },
});

export const loginUserServer = ({ email, password }: any) => ({
  type: LOGIN_USER_SERVER,
  payload: {
    request: {
      method: "POST",
      url: "auth/signin",
      data: {
        email,
        password,
      },
    },
    loader: Loaders.signIn,
  },
});

// export const confirmEmailServer = ({ token }: PostPublicApiAuthRegisterConfirmBody) => ({
//   type: CONFIRM_EMAIL_SERVER,
//   payload: {
//     request: {
//       method: "POST",
//       url: "api/auth/register/confirm",
//       data: {
//         token,
//       },
//     },
//   },
// });

// export const sendRecoveryLink = ({ email, callback }: RecoverUser & SendRecoveryProps) => ({
//   type: SEND_RECOVERY_LINK,
//   payload: {
//     request: {
//       method: "POST",
//       url: "api/auth/recovery",
//       data: {
//         email,
//       },
//     },
//     callback,
//   },
// });

// export const confirmResetPassword = ({
//   token,
//   newPassword,
//   callback,
// }: ConfirmRecovery & ConfirmResetPasswordProps) => ({
//   type: CONFIRM_RESET_PASSWORD,
//   payload: {
//     request: {
//       method: "POST",
//       url: "api/auth/password-reset/confirm",
//       data: {
//         token,
//         newPassword,
//       },
//     },
//     callback,
//   },
// });

// export const clearPersistedData = () => ({
//   type: CLEAR_PERSISTED_DATA,
//   payload: {},
// });

// export const loginUserWithGoogle = ({ token, navigate }: AuthUserWithGoogle & PostPublicApiAuthGoogleLoginBody) => ({
//   type: LOGIN_USER_WITH_GOOGLE,
//   payload: {
//     request: {
//       method: "POST",
//       url: "api/auth/google",
//       data: {
//         token,
//       },
//     },
//     navigate,
//   },
// });

// export const authWithWhop = ({ code, navigate }: AuthWithWhopProps) => ({
//   type: AUTH_WHOP,
//   payload: {
//     request: {
//       method: "POST",
//       url: "api/auth/whop",
//       data: {
//         code,
//       },
//     },
//     navigate,
//   },
// });

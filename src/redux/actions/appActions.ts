import { UpdateLoaderProps } from "redux/types/types";

export const NAVIGATE = "NAVIGATE";
export const UPDATE_LOADER = "UPDATE_LOADER";

export const navigateTo = (link: string) => ({
  type: NAVIGATE,
  payload: {
    link,
  },
});

export const updateLoader = ({ loader, status }: UpdateLoaderProps) => ({
  type: UPDATE_LOADER,
  payload: {
    loader,
    status,
  },
});

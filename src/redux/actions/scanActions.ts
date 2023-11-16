import { Loaders } from "redux/types/loaders";
import { ScanImageProps } from "redux/types/types";

export const SCAN_IMAGE_SERVER = "SCAN_IMAGE_SERVER";

export const scanImageServer = ({ Photo }: ScanImageProps) => ({
  type: SCAN_IMAGE_SERVER,
  payload: {
    request: {
      method: "POST",
      url: "scan",
      data: {
        Photo,
      },
      headers: { "Content-Type": "multipart/form-data" },
    },
    loader: Loaders.scanImage,
  },
});

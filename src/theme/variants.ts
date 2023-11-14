import { ThemeType } from "./types";

export enum ThemeVariants {
  light = "light",
  dark = "dark",
}

export const lightTheme: ThemeType = {
  brandBlue: "#007CFE",
  primaryBackground: "#FFFFFF",
  secondaryBackground: "#F9FAFB",
  textHeading: "#101828",
  textParagraph: "#475467",
  textBold: "#344054",
  textPlaceholder: "#667085",
  shapeBorder: "#D0D5DD",
  iconsSubText: "#344054",
  secondaryIconsSubText: "#98A2B3",
  inputFieldBackground: "#FFFFFF",
  labelBackground: "#F2F4F7",
  activeButton: "#F2F4F7",
  body: "#F9FAFB",
};

export const darkTheme: ThemeType = {
  brandBlue: "#3A7CFF",
  primaryBackground: "#1E1E1E",
  secondaryBackground: "#1E1E1E",
  textHeading: "#E8EAED",
  textParagraph: "#BDC1C5",
  textBold: "#E8EAED",
  textPlaceholder: "#9AA0A6",
  shapeBorder: "#575757",
  iconsSubText: "#9AA0A6",
  secondaryIconsSubText: "#9AA0A6",
  inputFieldBackground: "#121212",
  labelBackground: "#2E2E2E",
  activeButton: "#232627",
  body: "#1E1E1E",
};

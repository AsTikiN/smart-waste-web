import { ThemeVariants } from "../../theme/variants";

export const UPDATE_THEME = "UPDATE_THEME";

interface updateThemeProps {
  theme: ThemeVariants;
}

export const updateTheme = ({ theme }: updateThemeProps) => ({
  type: UPDATE_THEME,
  payload: {
    theme,
  },
});

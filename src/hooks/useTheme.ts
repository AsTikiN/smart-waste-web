import { useDispatch, useSelector } from "react-redux";

import { ThemeVariants } from "../theme/variants";
import { getTheme } from "redux/reducers/themeReducer";
import { updateTheme } from "redux/actions/themeActions";

export const useTheme = () => {
  const theme = useSelector(getTheme);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === ThemeVariants.light ? ThemeVariants.dark : ThemeVariants.light;
    dispatch(updateTheme({ theme: newTheme }));
  };

  return { theme, toggleTheme };
};

import { GoogleOAuthProvider } from "@react-oauth/google";

import Router from "./routes/routes";
import { darkTheme, lightTheme } from "./theme/variants";

import { ThemeVariants } from "theme/variants";
import { useTheme } from "hooks/useTheme";
import { Button, ThemeProvider } from "@mui/material";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const themeMode = theme === ThemeVariants.light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GoogleOAuthProvider clientId={clientId as string}>
        <Button onClick={() => toggleTheme()}>Toggle</Button>
        <Router />
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default App;

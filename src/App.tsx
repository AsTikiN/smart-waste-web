import { GoogleOAuthProvider } from "@react-oauth/google";

import Router from "./routes/routes";
import { getDesignTokens } from "./theme/variants";

import { useTheme } from "hooks/useTheme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  return (
    <ThemeProvider theme={getDesignTokens(theme)}>
      <GoogleOAuthProvider clientId={clientId as string}>
        <Router />
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default App;

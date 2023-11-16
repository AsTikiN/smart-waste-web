import { Stack, Switch, useTheme as useMuiTheme } from "@mui/material";
import { Logo } from "components/Logo";
import { useTheme } from "hooks/useTheme";

const Header = () => {
  const { toggleTheme } = useTheme();
  const theme = useMuiTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Stack
      sx={{
        position: "fixed",
        width: "100%",
        padding: "10px",
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: 100,
        backgroundColor: theme.palette.background.default,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <Switch onChange={handleToggleTheme} />
    </Stack>
  );
};

export default Header;

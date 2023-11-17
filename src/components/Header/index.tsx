import { IconButton, Stack, Switch, useTheme as useMuiTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logo } from "components/Logo";
import { useTheme } from "hooks/useTheme";
import { useDispatch } from "react-redux";
import { logout } from "redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const { toggleTheme } = useTheme();
  const theme = useMuiTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    dispatch(logout());
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
      <Stack flexDirection="row" alignItems="center">
        <Switch onChange={handleToggleTheme} />
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;

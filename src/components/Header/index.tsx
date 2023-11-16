import { Box, useTheme } from "@mui/material";
import { Logo } from "components/Logo";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        padding: "10px",
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: 100,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Logo />
    </Box>
  );
};

export default Header;

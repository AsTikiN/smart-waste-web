import { Avatar, Stack, Switch, Typography } from "@mui/material";
import { useTheme } from "hooks/useTheme";
import { useSelector } from "react-redux";
import { getUserData } from "redux/reducers/userReducer";

const Profile = () => {
  const userData = useSelector(getUserData);
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Stack spacing={1} sx={{ paddingTop: "80px", alignItems: "center" }}>
      <Avatar sx={{ margin: "0 auto", width: "120px", height: "120px" }} />
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {userData?.email}
      </Typography>
      <Switch onChange={handleToggleTheme} />
    </Stack>
  );
};

export default Profile;

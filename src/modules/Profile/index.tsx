import {
  Avatar,
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
  styled,
  useTheme as useMuiTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getUserData } from "redux/reducers/userReducer";
import QuestItem from "./components/QuestItem";

const Profile = () => {
  const userData = useSelector(getUserData);
  const { palette } = useMuiTheme();

  return (
    <Stack minHeight="100vh">
      <Container>
        <Stack sx={{ paddingTop: "80px", flexDirection: "row", alignItems: "center" }}>
          <Avatar sx={{ width: "100px", height: "100px" }} />
          <Stack ml="20px">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {userData?.username}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {userData?.email}
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between" mt="20px">
          <Typography fontWeight={500}>Level Up</Typography>
          <Typography fontWeight={500}>432/500</Typography>
        </Stack>
        <Progress variant="determinate" value={(432 / 500) * 100} />
      </Container>
      <Stack
        mt="40px"
        sx={{ backgroundColor: palette.primary.main, borderRadius: "40px 40px 0 0", flex: 1, paddingTop: "25px" }}
      >
        <Stack sx={{ flexDirection: "row", justifyContent: "space-around" }}>
          <UserInfoBox>
            <UserInfoBoxTitle>39</UserInfoBoxTitle>
            <Typography>Buckets</Typography>
          </UserInfoBox>
          <UserInfoBox>
            <UserInfoBoxTitle>17</UserInfoBoxTitle>
            <Typography>Level</Typography>
          </UserInfoBox>
          <UserInfoBox>
            <UserInfoBoxTitle>29</UserInfoBoxTitle>
            <Typography>Days</Typography>
          </UserInfoBox>
        </Stack>
        <Stack
          mt="30px"
          sx={{
            backgroundColor: palette.background.default,
            borderRadius: "40px 40px 0 0",
            flex: 1,
            padding: "14px 24px",
          }}
        >
          <UserInfoBoxTitle textAlign="center">Quests</UserInfoBoxTitle>
          <Box sx={{ maxHeight: "calc(100vh - 500px)", overflow: "scroll", paddingBottom: "20px" }}>
            <UserInfoBoxSubtitleTitle>Daily</UserInfoBoxSubtitleTitle>
            <Stack spacing={2} mt="10px">
              <QuestItem completeValue={1} totalValue={1}>
                Enter to app
              </QuestItem>
              <QuestItem completeValue={0} totalValue={1}>
                Take out the trash
              </QuestItem>
            </Stack>

            <UserInfoBoxSubtitleTitle mt="20px">General</UserInfoBoxSubtitleTitle>
            <Stack spacing={2} mt="10px">
              <QuestItem completeValue={5} totalValue={5}>
                Throw out 5 bottles
              </QuestItem>
              <QuestItem completeValue={7} totalValue={10}>
                Throw out 10 bottles
              </QuestItem>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

const UserInfoBox = styled(Stack)`
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  background: rgba(255, 255, 255, 0.3);
`;

const UserInfoBoxTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const UserInfoBoxSubtitleTitle = styled(Typography)``;

const Progress = styled(LinearProgress)`
  height: 9px;
  border-radius: 5px;

  & .MuiLinearProgress-bar {
    border-radius: 5px;
  }
`;

export default Profile;

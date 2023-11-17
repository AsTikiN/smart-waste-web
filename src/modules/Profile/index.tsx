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
import { getQuests, getUserData } from "redux/reducers/userReducer";
import QuestItem from "./components/QuestItem";
import { differenceInDays } from "lib/dateDifference";

const SCORE_PER_LEVEL = 500;

const Profile = () => {
  const userData = useSelector(getUserData);
  const quests = useSelector(getQuests);
  const { palette } = useMuiTheme();

  const daysWithApp = userData?.createAt ? differenceInDays(userData.createAt, new Date(Date.now())) : 1;
  const level = userData?.score ? userData?.score / SCORE_PER_LEVEL : 1;
  const scoreToNextLevel = userData?.score ? userData?.score % SCORE_PER_LEVEL : 0;

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
          <Typography fontWeight={500}>
            {scoreToNextLevel}/{SCORE_PER_LEVEL}
          </Typography>
        </Stack>
        <Progress variant="determinate" value={(scoreToNextLevel / SCORE_PER_LEVEL) * 100} />
      </Container>
      <Stack
        mt="40px"
        sx={{ backgroundColor: palette.primary.main, borderRadius: "40px 40px 0 0", flex: 1, paddingTop: "25px" }}
      >
        <Stack sx={{ flexDirection: "row", justifyContent: "space-around" }}>
          <UserInfoBox>
            <UserInfoBoxTitle>{userData?.buckets || 0}</UserInfoBoxTitle>
            <Typography>Buckets</Typography>
          </UserInfoBox>
          <UserInfoBox>
            <UserInfoBoxTitle>{level}</UserInfoBoxTitle>
            <Typography>Level</Typography>
          </UserInfoBox>
          <UserInfoBox>
            <UserInfoBoxTitle>{daysWithApp}</UserInfoBoxTitle>
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
            <UserInfoBoxSubtitleTitle mt="20px">General</UserInfoBoxSubtitleTitle>
            <Stack spacing={2} mt="10px">
              {quests.map((quest) => (
                <QuestItem key={quest.id} completeValue={quest.completed} totalValue={quest.total}>
                  {quest.name}
                </QuestItem>
              ))}
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

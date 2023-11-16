import { useDispatch } from "react-redux";
import { styled, Box, TextField, Button, Stack, Typography, Container } from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { loginUserServer } from "redux/actions/authActions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoaders } from "redux/reducers/appReducer";
import { useTheme } from "hooks/useTheme";

const SignIn = () => {
  const dispatch = useDispatch();
  const { toggleTheme } = useTheme();

  const loaders = useSelector(getLoaders);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (setter: Dispatch<SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const handleSignUp = () => {
    dispatch(loginUserServer({ email, password }));
  };

  return (
    <Page>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <AuthLayout title="Sign in">
            <Stack spacing={6}>
              <Stack spacing={2}>
                <TextField fullWidth placeholder="Email" value={email} onChange={handleInputChange(setEmail)} />
                <TextField fullWidth placeholder="Password" onChange={handleInputChange(setPassword)} />
              </Stack>
              <Button
                sx={{ height: "50px", borderRadius: "10px" }}
                fullWidth
                variant="contained"
                onClick={handleSignUp}
              >
                Sign in
              </Button>
            </Stack>
            <Typography mt={"20px"} textAlign="center" variant="body1">
              Don't have account yet? <Link to="/signup">Sign up</Link>
            </Typography>
          </AuthLayout>
        </Wrapper>
      </Container>
    </Page>
  );
};

const Page = styled("div")`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Box)`
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;

export default SignIn;

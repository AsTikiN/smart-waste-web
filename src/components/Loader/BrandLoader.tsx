import { FC } from "react";
import { Typography, keyframes, styled } from "@mui/material";

interface Props {
  show?: boolean;
}

const BrandLoader: FC<Props> = ({ show }) => {
  return (
    <Wrapper $show={show}>
      <Dark />
      <Typography variant="h4" color="white">
        Smart Waste
      </Typography>
      <Loader>♻️</Loader>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ $show?: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s linear;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  pointer-events: none;
`;

const Dark = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000;
  opacity: 1;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled("div")({
  fontSize: "48px",
  animation: `${rotate} 1.5s linear infinite`,
});

export default BrandLoader;

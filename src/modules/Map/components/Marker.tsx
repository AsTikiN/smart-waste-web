import { styled } from "@mui/material";
import { FC } from "react";

interface Props {
  lat: number;
  lng: number;
}

const Marker: FC<Props> = ({ lat, lng }) => {
  return <Wrapper>♻️</Wrapper>;
};

const Wrapper = styled("div")`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e4e4e4;
  font-size: 24px;
  border: 1px solid #676767;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export default Marker;

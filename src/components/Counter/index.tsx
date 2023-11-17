import { FC } from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { Add, Remove } from "@mui/icons-material";

interface Props {
  count: number;
  limit?: number;
  changeCounter: (count: number) => void;
}

const Counter: FC<Props> = ({ count, changeCounter, limit = 100 }) => {
  const { palette } = useTheme();

  const handleIncrement = () => {
    changeCounter(count + 1);
  };

  const handleDecrement = () => {
    changeCounter(count - 1);
  };

  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
      <StyledButton variant="outlined" onClick={handleDecrement} disabled={count === 0}>
        <Remove />
      </StyledButton>
      <CounterText color={palette.grey[700]} variant="h5">
        {count}
      </CounterText>
      <StyledButton disabled={limit <= count} variant="outlined" onClick={handleIncrement}>
        <Add />
      </StyledButton>
    </Stack>
  );
};

const CounterText = styled(Typography)`
  font-size: 1.5rem;
  width: 28px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  min-width: auto;
  width: 30px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.palette.grey[700]};
  padding: 0;

  svg {
    color: ${(props) => props.theme.palette.grey[700]};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.palette.grey[700]};
  }

  &.Mui-disabled {
    border: 2px solid ${(props) => props.theme.palette.grey[700]};
    opacity: 0.25;
  }
`;

export default Counter;

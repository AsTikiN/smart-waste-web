import { Box, Stack, Typography, useTheme } from "@mui/material";
import Counter from "components/Counter";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  count: number;
  changeCounter: (count: number) => void;
}

const BucketItem: FC<Props> = ({ children, count, changeCounter }) => {
  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        background: palette.grey[100],
        padding: "14px 12px",
        borderRadius: "8px",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" color={palette.grey[700]}>
        {children}
      </Typography>
      <Counter limit={10} count={count} changeCounter={changeCounter} />
    </Stack>
  );
};

export default BucketItem;

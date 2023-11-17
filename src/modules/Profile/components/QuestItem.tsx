import { FC } from "react";
import { Stack, Typography, useTheme } from "@mui/material";

interface Props {
  completeValue: number;
  totalValue: number;
  children: string;
}

const QuestItem: FC<Props> = ({ completeValue, totalValue, children }) => {
  const isCompleted = completeValue >= totalValue;
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "11px 13px",
        borderRadius: "15px",
        backgroundColor: isCompleted ? "#bce8c7" : "#f3f9ac",
      }}
    >
      <Typography variant="h6" color="#1e1e1e">
        {children}
      </Typography>
      <Typography variant="h6" color="#1e1e1e">
        {completeValue}/{totalValue}
      </Typography>
    </Stack>
  );
};

export default QuestItem;

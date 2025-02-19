import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { LinearDeterminateProps } from "@/app/types/recommendationTypes";

export const LinearDeterminate: React.FC<LinearDeterminateProps> = ({
  progresso,
}) => {
  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      <LinearProgress variant="determinate" value={progresso} />
    </Box>
  );
};

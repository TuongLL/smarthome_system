import { Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import variables from '../../styles/global.module.scss'
import React from "react";

function LightIcon({status}) {
  return (
    <Box
      display="flex"
      sx={{
        background: status == "on" ? "rgb(229 250 251)" : "rgb(253 243 245)",
        padding: "5px 10px",
        borderRadius: "12px",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <LightbulbIcon
        style={{
          width: "40px",
          height: "40px",
          color: status == "on" ? variables.primaryBlue : variables.primaryRed,
        }}
      />
    </Box>
  );
}

export default LightIcon;

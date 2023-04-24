import React from "react";
import WindPowerIcon from "@mui/icons-material/WindPower";
import variables from '../../styles/global.module.scss'
import { Box } from "@mui/material";

function FanIcon() {
  return (
    <Box
      display="flex"
      sx={{
        background: "rgb(229 250 251)",
        padding: "5px 10px",
        borderRadius: "12px",
        justifyContent: "center"
      }}
    >
      <WindPowerIcon
        style={{
          width: "40px",
          height: "40px",
          color: variables.primaryBlue,
        }}
      />
    </Box>
  );
}

export default FanIcon;

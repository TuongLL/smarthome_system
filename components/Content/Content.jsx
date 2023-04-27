import { Box } from "@mui/material";
import Door from "../Door/Door";
import Energy from "../Energy/Energy";
import Fan from "../Fan/Fan";
import Light from "../Light/Light";
import Weather from "../Weather/Weather";
import React, {useEffect} from "react";

function Content({ collapsedState }) {
  
  return (
    <Box
      padding="12px 24px"
      sx={{
        width: collapsedState == false ? "calc(100% )" : "calc(100% + 100px)",
      }}
    >
      <Box display="flex" gap="24px" marginBottom="24px">
        <Box flex={7} display="flex" flexDirection="column" gap="24px">
          <Box display="flex" gap="12px">
            <Door status="unlocked" />
            <Light />
          </Box>
          <Box flex={1}>
            <Fan />
          </Box>
        </Box>
        <Box flex={3}>
          <Weather />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            padding: "25px",
            background: "white",
            borderRadius: "24px",
          }}
          flex={1}
        >
          <Energy />
        </Box>
      </Box>
    </Box>
  );
}

export default Content;

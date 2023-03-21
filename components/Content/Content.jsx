import { Box, Typography } from "@mui/material";
import React from "react";
import Energy from "../Energy/Energy";
import Weather from "../Weather/Weather";
import Door from "../Door/Door";
import Light from "../Light/Light";
import Fan from "../Fan/Fan";

function Content() {
  return (
    <Box padding='0 24px' >
      <Box display="flex" gap='24px' marginBottom='24px'>
        <Box
          flex={1}
          
          display='flex'
          flexDirection='column'
          gap='24px'
        >
          <Box display="flex" gap="12px">
            <Door status="unlocked" />
            <Light />
          </Box>
          <Box flex={1}>
            <Fan />
          </Box>
        </Box>
        <Box
          
          flex={1}
        >
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

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import variables from "../../styles/global.module.scss";

function Door({ status }) {
  const [doorStatus, setDoorStatus] = React.useState(status);
  const handleDoor = () => {
    if (doorStatus == 'locked')
        setDoorStatus('unlocked')
    else setDoorStatus('locked')
  }
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "25px",
        flex: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        Main door
      </Typography>
      <Typography>
        You can control main door with lock and unlock here
      </Typography>
      <Box display="flex" gap="5px">
        <Typography>Your door:</Typography>
        <Typography
          sx={{
            fontWeight: 700,
            textTransform: "capitalize",
          }}
          color={
            status == "unlocked" ? variables.primaryRed : variables.primaryBlue
          }
        >
          {doorStatus}
        </Typography>
      </Box>
      <Button
        onClick={handleDoor}
        style={{
          background: variables.primaryBlue,
          color: "white",
          borderRadius: "12px",
        }}
      >
        Lock
      </Button>
    </Box>
  );
}

export default Door;

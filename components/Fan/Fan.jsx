import React from "react";
import variables from "../../styles/global.module.scss";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
function Fan() {
  const [check, setCheck] = React.useState(false);
  const [room, setRoom] = React.useState("");

  const handleChange = (event) => {
    setRoom(event.target.value);
  };
  return (
    <Box
      flex={1}
      sx={{
        background: "white",
        borderRadius: "25px",
        padding: "24px",
      }}
      height="100%"
      display="flex"
      marginTop="auto"
      gap="50px"
    >
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            gap="12px"
            alignItems="center"
            sx={{
              lineHeight: 1,
            }}
          >
            <Box
              display="flex"
              sx={{
                background: "rgb(229 250 251)",
                padding: "5px 10px",
                borderRadius: "12px",
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
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "24px",
              }}
            >
              Fan
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            <FormControl
              disabled={!check}
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <InputLabel id="demo-select-small">Room</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={room}
                label="Room"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Switch
              onChange={(e) => setCheck(e.target.checked)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: variables.primaryBlue,
                },
                "& .MuiSwitch-track": {
                  borderRadius: 26 / 2,
                  backgroundColor: variables.primaryRed,
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Box>

        <Box>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{
              color: variables.primaryBlue,
            }}
            disabled={!check}
          />
        </Box>
      </Box>
      <Box>
        <Image
          width={100}
          height={100}
          //   style={{ width: "120px", height: "120px" }}
          src="https://flexy-next-js-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwelcome-bg2-2x-svg.67cde987.svg&w=640&q=75"
        />
      </Box>
    </Box>
  );
}

export default Fan;

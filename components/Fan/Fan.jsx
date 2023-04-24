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
import FanIcon from "../FanIcon/FanIcon";
import { useSelector } from "react-redux";
import { getDeviceByIds } from "@/utils/fetchAPI";
import LightIcon from "../LigthIcon/LightIcon";
function Fan({ rooms, accessToken }) {
  const [selectRoom, setSelectRoom] = React.useState("");
  const [selectDevice, setSelectDevice] = React.useState("");
  const [devices, setDevices] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const isUserMode = useSelector((state) => state.mode.isUserMode);
  const handleSelectRoom = async (event) => {
    const room = event.target.value;
    const devicesResponse = await getDeviceByIds(room.deviceIds, accessToken);
    setDevices(devicesResponse);
    setSelectRoom(room);
  };

  const handleSelectDevice = (event) => {
    const device = event.target.value;
    setSelectDevice(device);
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
            <FanIcon />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "24px",
              }}
            >
              Fan
            </Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel id="demo-select-small">Room</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={selectRoom}
                label="Room"
                onChange={handleSelectRoom}
              >
                {rooms.map((room) => (
                  <MenuItem value={room}>
                    <Typography>{room.name}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 300 }}
              size="small"
              disabled={selectRoom == "" ? true : false}
            >
              <InputLabel id="demo-simple-select-label">Device</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectDevice}
                label="Device"
                onChange={handleSelectDevice}
              >
                {devices.map((device) => {
                  if (device.type == "fan") {
                    return (
                      <MenuItem value={device}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          {device.type == "fan" ? <FanIcon /> : <></>}
                          <Typography>{device.name}</Typography>
                        </Box>
                      </MenuItem>
                    );
                  }
                  return <></>
                })}
              </Select>
            </FormControl>
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
            disabled={!isUserMode}
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

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SwitchUI from "../SwitchUI/SwitchUI";
import variables from "../../styles/global.module.scss";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { getDeviceByIds, getRoomsOfUser } from "@/utils/fetchAPI";
import FanIcon from "../FanIcon/FanIcon";
import LightIcon from "../LigthIcon/LightIcon";

function Light({rooms, accessToken}) {
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
      sx={{
        flex: 1,
        background: "white",
        borderRadius: "25px",
        padding: "24px",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          display="flex"
          sx={{
            background: "rgb(229 250 251)",
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
              color: variables.primaryBlue,
            }}
          />
        </Box>
        <Switch
          onChange={(e) => setCheck(e.target.checked)}
          disabled={!isUserMode || selectDevice == "" || selectRoom == ""}
          // checked= {(selectDevice != "" && selectRoom != "")? check : !check}
          // disableRipple
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
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        Central Light
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
        sx={{ m: 1, minWidth: 120 }}
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
            if (device.type == 'light'){
              return <MenuItem value={device}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {device.type == "fan" ? <FanIcon /> : <LightIcon />}
                <Typography>{device.name}</Typography>
              </Box>
            </MenuItem>
            }
            return <></>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Light;

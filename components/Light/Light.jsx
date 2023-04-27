import { getDeviceByIds, getRoomsOfUser, toggleStatus } from "@/utils/fetchAPI";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import { last } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import variables from "../../styles/global.module.scss";
import FanIcon from "../FanIcon/FanIcon";
import LightIcon from "../LigthIcon/LightIcon";
import { toast } from "react-toastify";

function Light() {
  const [selectRoom, setSelectRoom] = React.useState("");
  const [selectDevice, setSelectDevice] = React.useState("");
  const [devices, setDevices] = React.useState([]);
  const [rooms, setRooms] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const [defaultCheck, setDefaultCheck] = React.useState(false);
  const isUserMode = useSelector((state) => state.mode.isUserMode);

  const accessToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const handleSelectRoom = async (event) => {
    const room = event.target.value;
    const devicesResponse = await getDeviceByIds(room.deviceIds, accessToken);
    setDevices(devicesResponse);
    setSelectRoom(room);
  };

  const handleSelectDevice = async (event) => {
    const device = event.target.value;
    console.log(last(device.record));
    setCheck(last(device.record).state);
    setSelectDevice(device);
  };

  const handleSwitch = async (e) => {
    const status = !check;
    await toggleStatus(selectDevice._id.toString(), status, accessToken);
    setCheck(() => status);
    const message =
      status == true
        ? "Turn ON the light successfully"
        : "Turn OFF the light successfully";
    toast.success(`🦄${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    const getRooms = async () => {
      const room = await getRoomsOfUser(userId, accessToken);
      setRooms(room);
    };
    getRooms();
  }, []);

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
          onChange={handleSwitch}
          disabled={!isUserMode || selectDevice == "" || selectRoom == ""}
          // defaultChecked={defaultCheck}
          checked={check}
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
          {rooms.map((room, index) => (
            <MenuItem value={room} key={index}>
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
          {devices.map((device, index) => {
            if (device.type == "light") {
              return (
                <MenuItem value={device} key={index}>
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
              );
            }
            return <Box key={index}></Box>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Light;

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import React from "react";
import FanIcon from "../FanIcon/FanIcon";
import { addDeviceToRoom, getDeviceByType } from "@/utils/fetchAPI";
import LightIcon from "../LigthIcon/LightIcon";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};
function AddDeviceModal({ isJoined, roomId, setRooms, setLoading, rooms }) {
  const [open, setOpen] = React.useState(false);
  const [selectDevice, setSelectDevice] = React.useState(null);
  const [type, setType] = React.useState("");
  const [devices, setDevices] = React.useState([]);
  const accessToken = localStorage.getItem("token");
  const handleChange = async (event) => {
    const devicesResponse = await getDeviceByType(
      event.target.value,
      accessToken
    );
    setType(event.target.value);
    setDevices(devicesResponse);
  };
  const handleSelectDevice = (event) => {
    setSelectDevice(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = async () => {
    try {
      await addDeviceToRoom(roomId, selectDevice._id, accessToken);
      const items = rooms.map((item) => {
        if (item._id == roomId) {
          return {
            ...item,
            devices: [...item.devices, selectDevice],
          };
        }
        return item;
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        handleClose();
        setRooms(items);
        toast.success("🦄 Added device to room successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 1500);
    } catch (err) {
      toast.warn("🦄 Device already exist in Room!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(err);
    }
  };
  return (
    <Box>
      <Button
        disabled={!isJoined}
        onClick={handleOpen}
        color="primary"
        variant="contained"
      >
        Add Device
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Device
          </Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value="fan">Fan</MenuItem>
                <MenuItem value="light">Light</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl fullWidth disabled={type == "" ? true : false}>
            <InputLabel id="demo-simple-select-label">Device</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectDevice}
              label="Device"
              onChange={handleSelectDevice}
            >
              {devices.map((device, index) => (
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
              ))}
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddDeviceModal;

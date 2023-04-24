import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import variables from "../../styles/global.module.scss";
function Edit({ setOpenEdit, data }) {
  const [type, setType] = React.useState(data?.type ?? "");
  const [room, setRoom] = React.useState(data?.room ?? "");
  const [name, setName] = React.useState(data?.name ?? "");
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleSave = () => {
    console.log(name, type, room);
    setOpenEdit(false);
  };
  return (
    <Box
      display="flex"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          background: "white",
          padding: "30px 50px",
          borderRadius: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Edit Device
        </Typography>
        <Box display="flex" marginTop="12px" alignItems="center" gap="12px">
          <Typography minWidth="100px">Device Name</Typography>
          <TextField
            defaultValue={name}
            fullWidth
            size="small"
            sx={{
              padding: "10px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: variables.primaryBlue,
                },
              },
            }}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter device name"
          />
        </Box>
        <Box display="flex" alignItems="center" gap="12px">
          <Typography minWidth="100px">Type</Typography>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Type</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={type}
                label="Type"
                onChange={handleChangeType}
              >
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="fan">Fan</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="12px">
          <Typography minWidth="100px">Room</Typography>
          <Autocomplete
            disablePortal
            size="small"
            id="combo-box-demo"
            options={rooms}
            defaultValue={data?.room}
            sx={{ width: 300, padding: "10px" }}
            onChange={(event, newValue) => {
              setRoom(newValue);
            }}
            renderInput={(params) => (
              <TextField
                sx={{ textTransform: "capitalize" }}
                {...params}
                label="Room"
              />
            )}
          />
        </Box>
        <Box
          marginTop="12px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="12px"
        >
          <Button
            sx={{
              borderRadius: "12px",
              padding: "5px 20px",
              background: variables.primaryRed,
              color: "white",
              ":hover": {
                bgcolor: "#de7657",
              },
            }}
            onClick={() => setOpenEdit(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            sx={{
              borderRadius: "12px",
              padding: "5px 20px",
              background: variables.primaryBlue,
              color: "white",
              ":hover": {
                bgcolor: "rgb(5 178 189)",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
const rooms = ["Bedroom", "Kitchen"];

export default Edit;

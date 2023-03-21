import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SwitchUI from "../SwitchUI/SwitchUI";
import variables from "../../styles/global.module.scss";
import Select from "@mui/material/Select";

function Light() {
  const [room, setRoom] = React.useState("");
  const [check, setCheck] = React.useState(false);

  const handleChange = (event) => {
    setRoom(event.target.value);
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

      <FormControl disabled={!check} sx={{ m: 1, minWidth: 120 }} size="small">
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
    </Box>
  );
}

export default Light;

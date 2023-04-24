import Header from "@/components/Header/Header";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import userImage from "../../../assets/user.jpg";
import Image from "next/image";

function Profile() {
  const [info, setInfo] = React.useState({});
  React.useEffect(() => {
    setInfo({
      firstName: "lam",
      lastName: "Tuong",
      email: "example@gmail.com",
      phoneNumber: "123123123",
    });
  }, []);
  
  const handleSave = async () => {
  }

  return (
    <Box display="flex" padding="25px" gap='25px'>
      <Box>
        <Image
          src={userImage}
          width={200}
          height="auto"
          style={{ borderRadius: "12px" }}
        />
      </Box>
      <Box display={'flex'} sx={{
        flexDirection: 'column',
        gap: '12px',
        justifyContent: 'center'
      }}>
        <Box display={"flex"} sx={{gap:'25px'}}>
          <Box>
            <Typography>First Name</Typography>
            <TextField
              id="demo-simple-select"
              value={info.firstName}
              onChange={(e) =>
                setInfo((info) => {
                  return { ...info, firstName: e.target.value };
                })
              }
            />
          </Box>
          <Box>
            <Typography>Last Name</Typography>
            <TextField
              id="demo-simple-select"
              value={info.lastName}
              onChange={(e) =>
                setInfo((info) => {
                  return { ...info, lastName: e.target.value };
                })
              }
            />
          </Box>
        </Box>
        <Box display={"flex"} sx={{gap:'25px'}}>
          <Box>
            <Typography>Email</Typography>
            <TextField
            disabled
              value={info.email}
            />
          </Box>
          <Box>
            <Typography>Phone Number</Typography>
            <TextField
              id="demo-simple-select"
              value={info.phoneNumber}
              onChange={(e) =>
                setInfo((info) => {
                  return { ...info, phoneNumber: e.target.value };
                })
              }
            />
          </Box>
        </Box>
        <Button variant="contained" onClick={handleSave}>Save Change</Button>
      </Box>
    </Box>
  );
}

export default Profile;

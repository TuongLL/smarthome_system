import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { addUserToRoom, getUserByEmail } from "@/utils/fetchAPI";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import UserAvatar from "../UserAvatar/UserAvatar";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

export default function SearchUser({ roomId, setRooms, rooms, setLoading, handleClose }) {
  const [input, setInput] = React.useState("");
  const [userItem, setUserItem] = React.useState(null);
  const [isCheck, setIsCheck] = React.useState(false);

  const accessToken = localStorage.getItem("token");
  const searchHandle = async () => {
    const user = await getUserByEmail(input, accessToken);
    setUserItem(user);
  };
  const handleAddUser = async () => {
    try {
      await addUserToRoom(roomId, userItem._id);
      const items = rooms.map((item) => {
        if (item._id == roomId) {
          return {
            ...item,
            users: [...item.users, userItem],
          };
        }
        return item;
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        handleClose()
        setRooms(items);
        toast.success("🦄 Added user to room successfully", {
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
        toast.warn("🦄 User already exist in Room!", {
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
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter user email"
          inputProps={{ "aria-label": "search user email" }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={searchHandle}
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
      {userItem ? (
        <UserSearchCard
          {...userItem}
          userName={userItem.firstName.concat(" ", userItem.lastName)}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
        />
      ) : (
        <></>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "12px",
        }}
      >
        <Button variant="contained" disabled={!isCheck} onClick={handleAddUser}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

function UserSearchCard({ userName, email, phoneNumber, isCheck, setIsCheck }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px",
        background: isCheck == true ? "#ccc" : "white",
      }}
    >
      <UserAvatar userName={userName} />
      <Box flex={1}>
        <Typography sx={{}}>{email}</Typography>
        <Typography
          sx={{
            fontStyle: "italic",
          }}
        >
          {phoneNumber}
        </Typography>
      </Box>
      <Checkbox value={isCheck} onClick={() => setIsCheck(!isCheck)} />
    </Box>
  );
}

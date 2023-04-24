import { Box, Button, Checkbox, Modal, Typography } from "@mui/material";
import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import UserAvatar from "../UserAvatar/UserAvatar";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: '12px',
};
function AddUserModal({ isJoined, roomId, setRooms, setLoading, rooms }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        disabled={!isJoined}
        onClick={handleOpen}
        color="primary"
        variant="contained"
      >
        Add User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Search User By Email
          </Typography>
          <SearchUser roomId={roomId} setRooms={setRooms} setLoading={setLoading} rooms={rooms} handleClose={handleClose}/>
        </Box>
      </Modal>
    </Box>
  );
}



export default AddUserModal;

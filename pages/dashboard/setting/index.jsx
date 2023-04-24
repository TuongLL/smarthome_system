import AddUserModal from "@/components/AddUserModal/AddUserModal";
import Loading from "@/components/Loading/Loading";
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import {
  addUserToRoom,
  getAllRooms,
  getDeviceByIds,
  getUserById,
  getUserByIds,
  removeDeviceInRoom,
  removeUserInRoom,
} from "@/utils/fetchAPI";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { indexOf } from "lodash";
import React, { useEffect, useState } from "react";
import variables from "../../../styles/global.module.scss";
import AddDeviceModal from "@/components/AddDeviceModal/AddDeviceModal";
import LightIcon from "@/components/LigthIcon/LightIcon";
import FanIcon from "@/components/FanIcon/FanIcon";

function Row({ room, setRooms, rooms, setLoading }) {
  const [open, setOpen] = useState(false);
  const [joinRoom, setJoinRoom] = useState(room.isJoined);

  const handleDeleteUser = async (room, userRow, setJoinRoom) => {
    await removeUserInRoom(room._id, userRow._id, room.accessToken);
    const globalUserId = localStorage.getItem("userId");
    const items = rooms.map((item) => {
      if (item._id == room._id) {
        return {
          ...item,
          users: room.users.filter((user) => user._id != userRow._id),
        };
      }
      return item;
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (userRow._id == globalUserId) {
        setJoinRoom(false);
      }
      setRooms(items);
    }, 1500);
  };
  const handleJoinRoom = async () => {
    const user = await getUserById(room.userId, room.accessToken);
    const items = rooms.map((item) => {
      if (item._id == room._id) {
        return { ...item, users: [...room.users, user] };
      }
      return item;
    });
    await addUserToRoom(room._id, user._id, room.accessToken);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRooms(items);
      setJoinRoom(true);
    }, 1500);
  };

  const handleDeleteDevice = async (room, deviceRow) => {
    console.log(room, deviceRow);
    await removeDeviceInRoom(room._id, deviceRow._id, room.accessToken);
    const items = rooms.map((item) => {
      if (item._id == room._id) {
        return {
          ...item,
          devices: room.devices.filter((device) => device._id != deviceRow._id),
        };
      }
      return item;
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRooms(items);
    }, 1000);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell width={"5%"}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {room.name}
        </TableCell>
        <TableCell align="right">{room.createdAt}</TableCell>
        <TableCell align="right" width="20%">
          {joinRoom == false ? (
            <Button
              variant="contained"
              color="success"
              onClick={handleJoinRoom}
            >
              Join Room
            </Button>
          ) : (
            <Button variant="contained" disabled>
              Joined
            </Button>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" gutterBottom component="div">
                  Users
                </Typography>
                <AddUserModal
                  isJoined={joinRoom}
                  roomId={room._id}
                  setRooms={setRooms}
                  rooms={rooms}
                  setLoading={setLoading}
                />
              </Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell width="10%" />
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {room.users.map((userRow) => (
                    <TableRow key={userRow.date}>
                      <TableCell>
                        <UserAvatar
                          userName={userRow.firstName.concat(
                            " ",
                            userRow.lastName
                          )}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {userRow.firstName}
                      </TableCell>
                      <TableCell>{userRow.lastName}</TableCell>
                      <TableCell align="right">{userRow.email}</TableCell>
                      <TableCell align="right">{userRow.phoneNumber}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          disabled={!joinRoom}
                          onClick={() =>
                            handleDeleteUser(room, userRow, setJoinRoom)
                          }
                        >
                          <DeleteIcon
                            sx={{
                              color: variables.primaryRed,
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ margin: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" gutterBottom component="div">
                  Devices
                </Typography>
                <AddDeviceModal
                  isJoined={joinRoom}
                  roomId={room._id}
                  setRooms={setRooms}
                  rooms={rooms}
                  setLoading={setLoading}
                />
              </Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell width="10%" />
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {room.devices.map((deviceRow) => (
                    <TableRow key={deviceRow.date}>
                      <TableCell>
                        {deviceRow.type == "fan" ? <FanIcon /> : <LightIcon />}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {deviceRow.name}
                      </TableCell>
                      <TableCell align="right">{deviceRow.type}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          disabled={!joinRoom}
                          onClick={() => handleDeleteDevice(room, deviceRow)}
                        >
                          <DeleteIcon
                            sx={{
                              color: variables.primaryRed,
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    try {
      const api = async () => {
        const roomsResponse = await getAllRooms(accessToken);
        const room = await Promise.all(
          roomsResponse.map(async (room) => {
            const usersInfo = await getUserByIds(room.userIds, accessToken);
            const devicesInfo = await getDeviceByIds(
              room.deviceIds,
              accessToken
            );
            return {
              _id: room._id,
              name: room.name,
              createdAt: room.createdAt,
              users: usersInfo,
              devices: devicesInfo,
              isJoined: indexOf(room.userIds, userId) != -1 ? true : false,
              userId,
              accessToken,
            };
          })
        );
        setRooms(room);
      };
      api();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Box width={"calc(80vw) "} padding="12px 24px">
      <Loading loading={loading} />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <Row
                key={room._id}
                room={room}
                rooms={rooms}
                setRooms={setRooms}
                setLoading={setLoading}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  Badge,
  Button,
  Divider,
  FormControlLabel,
  Switch,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useProSidebar } from "react-pro-sidebar";
import User from "../../assets/user.jpg";
import variables from "../../styles/global.module.scss";
import Notification from "../Notification/Notification";
import UserProfile from "../UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { setUserMode } from "@/store/slices/modeSlice";

export default function Header({ collapsedState, setCollapsedState }) {
  const dispatch = useDispatch();

  const { collapseSidebar } = useProSidebar();
  const [anchorUser, setAnchorUser] = React.useState(null);
  const [anchorNoti, setAnchorNoti] = React.useState(null);
  const userInfo = {
    name: "Tuong lam",
    email: "lamtuong2012392@gmail.com",
  };
  const handleUserMenu = (event) => {
    setAnchorUser(event.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorUser(null);
  };

  const handleNotiMenu = (event) => {
    setAnchorNoti(event.currentTarget);
  };
  const handleNotiClose = () => {
    setAnchorNoti(null);
  };

  const [invisible, setInvisible] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [usermodeState, setUsermodeState] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        background: "red",
      }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "#fbfbfb", boxShadow: "unset" }}
      >
        <Toolbar>
          <Box flex={1} display="flex" alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                collapseSidebar();
                setCollapsedState(!collapsedState);
              }}
            >
              <MenuIcon
                sx={{
                  color: variables.textGray,
                }}
              />
            </IconButton>
            <Link href="/dashboard">
              <img
                width={100}
                height={50}
                alt="alt img"
                src="https://flexy-next-js-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.f398d1f1.svg&w=128&q=75"
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                color: variables.textGray,
                width: "150px",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    onChange={() => {
                      dispatch(setUserMode(!usermodeState));
                      setUsermodeState(!usermodeState);
                    }}
                  />
                }
                label={usermodeState == false ? "Auto" : "User Mode"}
              />
            </Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleNotiMenu}
              color="inherit"
              style={{
                width: "50px",
                height: "50px",
              }}
            >
              <Badge
                variant="dot"
                sx={{
                  "& .MuiBadge-badge": {
                    color: "lightgreen",
                    backgroundColor: variables.primaryRed,
                  },
                }}
              >
                <NotificationsNoneIcon style={{ color: "#949db2" }} />
              </Badge>
            </IconButton>
            <Divider
              orientation="vertical"
              style={{
                marginRight: "10px",
              }}
              variant="middle"
              flexItem
            />
            <Button aria-controls="user-control" onClick={handleUserMenu}>
              <img
                alt="alt img"
                src={"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}
                width="30"
                height="30"
                style={{ borderRadius: "100%" }}
              />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  alignItems: "center",
                }}
              >
                <Typography
                  color="textSecondary"
                  fontWeight="400"
                  sx={{ ml: 1 }}
                >
                  Hi,
                </Typography>
                <Typography
                  fontWeight="700"
                  sx={{
                    ml: 1,
                  }}
                  color="textSecondary"
                >
                  Tuong
                </Typography>
                <ArrowDropDownIcon
                  sx={{
                    fontSize: "40px",
                    color: "#ccc",
                  }}
                />
              </Box>
            </Button>
            <UserProfile
              {...userInfo}
              userImage={User}
              anchorUser={anchorUser}
              handleUserClose={handleUserClose}
            />
            <Notification
              anchorNoti={anchorNoti}
              handleNotiClose={handleNotiClose}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

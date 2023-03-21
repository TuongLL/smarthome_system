import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge, Button, Divider, Drawer } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import User from "../../assets/user.jpg";
import Notification from "../Notification/Notification";
import UserProfile from "../UserProfile/UserProfile";
import variables from "../../styles/global.module.scss";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Header() {
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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
              onClick={handleDrawerOpen}
            >
              <MenuIcon
                sx={{
                  color: variables.textGray,
                }}
              />
            </IconButton>
            <Image
              width={100}
              height={100}
              src="https://flexy-next-js-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.f398d1f1.svg&w=128&q=75"
            />
          </Box>
          <Drawer
            sx={{
              width: "100px",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "100px",
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>

            <Divider />
          </Drawer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
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
              <Image
                src={User}
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

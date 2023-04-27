import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Header from "./Header/Header";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useEffect, useState } from "react";
import variables from "../styles/global.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function DashboardLayout({
  collapsedState,
  setCollapsedState,
  children,
}) {
  const router = useRouter();
  const [renderUI, setRenderUI] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      router.push("/login");
    } else {
      setRenderUI(true);
    }
  }, []);
  const itemList = [
    { icon: <DashboardIcon />, title: "Dashboard", link: "" },
    {
      icon: <AccountCircleIcon />,
      title: "User Profile",
      link: "profile",
    },
    {
      icon: <SettingsIcon />,
      title: "Setting",
      link: "setting",
    },
  ];
  if (renderUI == true)
    return (
      <>
        <Header
          collapsedState={collapsedState}
          setCollapsedState={setCollapsedState}
        />
        <Box display="flex">
          <Sidebar>
            <Menu
              menuItemStyles={{
                subMenuContent: {
                  background: "red",
                },
              }}
            >
              {itemList.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    active
                    icon={item.icon}
                    component={
                      <Link passHref href={`/dashboard/${item.link}`} />
                    }
                  >
                    <Typography>{item.title}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Sidebar>
          <Box
            sx={{
              minHeight: "calc(100vh - 24px)",
              width: "auto",
            }}
          >
            {children}
          </Box>
        </Box>
      </>
    );
  return <></>;
}

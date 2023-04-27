import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import variables from "../../styles/global.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/slices/authSlice";
import { useRouter } from "next/router";
function UserProfile({ name, email, userImage, anchorUser, handleUserClose }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Menu
      id="user-control"
      anchorEl={anchorUser}
      open={Boolean(anchorUser)}
      onClose={handleUserClose}
    >
      <Box
        sx={{
          padding: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          fontWeight="400"
          sx={{ ml: 1, fontSize: "20px", fontWeight: "700" }}
        >
          User Profile
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            margin: "20px 0",
          }}
          alignItems="center"
        >
          <img
            alt="alt image"
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            style={{ borderRadius: "50%", width: "120px", height: "120px" }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: variables.textGray,
                fontSize: "14px",
              }}
            >
              Administrator
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
              }}
              alignItems="center"
            >
              <MailOutlineIcon
                style={{
                  color: variables.textGray,
                }}
              />
              <Typography
                sx={{
                  color: variables.textGray,
                  fontSize: "14px",
                }}
              >
                {email}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <MenuItem sx={{ padding: "20px" }}>
          <Link
            href="dashboard/profile"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "15px",
              }}
              alignItems="center"
            >
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
                <AdminPanelSettingsIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: variables.primaryBlue,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  My Profile
                </Typography>
                <Typography color="textSecondary">Account Settings</Typography>
              </Box>
            </Box>
          </Link>
        </MenuItem>
        <Divider style={{ margin: 0 }} />
        <MenuItem sx={{ padding: "20px" }}>
          <Link
            href="dashboard/setting"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "15px",
              }}
              alignItems="center"
            >
              <Box
                display="flex"
                sx={{
                  background: "rgb(253 243 245)",
                  padding: "5px 10px",
                  borderRadius: "12px",
                }}
                alignItems="center"
                justifyContent="center"
              >
                <AppSettingsAltIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: variables.primaryRed,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  My Home
                </Typography>
                <Typography color="textSecondary">Device Settings</Typography>
              </Box>
            </Box>
          </Link>
        </MenuItem>
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <Button
            fullWidth
            sx={{
              borderRadius: "12px",
              background: variables.primaryBlue,
              color: "white",
              ":hover": {
                bgcolor: "rgb(5 178 189)",
              },
            }}
            onClick={() => {
              router.push("login");
              dispatch(setAuth(false));
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Menu>
  );
}

export default UserProfile;

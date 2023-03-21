import {
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import variables from "../../styles/global.module.scss";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function Notification({ anchorNoti, handleNotiClose }) {
  const notifications = [
    {
      title: "Kitchen Light is turn on",
      status: "on",
      timestamp: "09:51:30 - 21/03/2023",
    },
    {
      title: "Kitchen Light is turn off",
      status: "off",
      timestamp: "09:51:30 - 21/03/2023",
    },
    {
      title: "Kitchen Fan is turn on",
      status: "on",
      timestamp: "09:51:30 - 21/03/2023",
    },
    {
      title: "Kitchen Fan is turn off",
      status: "off",
      timestamp: "09:51:30 - 21/03/2023",
    },
  ];

  return (
    <Menu
      id="user-control"
      anchorEl={anchorNoti}
      open={Boolean(anchorNoti)}
      onClose={handleNotiClose}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box
        sx={{
          padding: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box display="flex" alignItems="center" gap="20px">
          <Typography
            fontWeight="400"
            sx={{ ml: 1, fontSize: "20px", fontWeight: "700" }}
          >
            Notifications
          </Typography>
          <Typography
            sx={{
              padding: "5px 15px",
              bgcolor: variables.primaryYellow,
              borderRadius: "8px",
              color: "white",
              fontWeight: "500",
            }}
          >
            5 new
          </Typography>
        </Box>
        <Box
          marginTop="10px"
          sx={{
            maxHeight: "300px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: variables.primaryBlue,
            },
          }}
        >
          {notifications.map(({ title, status, timestamp }, index) => (
            <div key={index}>
              <MenuItem>
                <Box
                  display="flex"
                  alignItems="center"
                  gap="18px"
                  padding="10px 0"
                >
                  <Box
                    display="flex"
                    sx={{
                      background:
                        status == "on"
                          ? "rgb(229 250 251)"
                          : "rgb(253 243 245)",
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
                        color:
                          status == "on"
                            ? variables.primaryBlue
                            : variables.primaryRed,
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
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        color: variables.textGray,
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    >
                      {timestamp}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
              <Divider style={{ margin: 0 }} />
            </div>
          ))}
        </Box>
        <Box
          sx={{
            marginTop: "15px",
          }}
        >
          <Button
            fullWidth
            sx={{
              borderRadius: "8px",
              background: variables.primaryBlue,
              color: "white",
              ":hover": {
                bgcolor: "rgb(5 178 189)",
              },
              textTransform: "unset",
            }}
          >
            See all notifications
          </Button>
        </Box>
      </Box>
    </Menu>
  );
}

export default Notification;

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import variables from "../styles/global.module.scss";
import React from "react";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
function register() {
  return (
    <Box display="flex">
      <Box
        flex={1}
        sx={{
          background: "white",
        }}
        padding="0 20px"
      >
        <Box position="absolute">
          <img
            alt="alt img"
            width={150}
            height={150}
            src="https://flexy-next-js-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.f398d1f1.svg&w=128&q=75"
          />
        </Box>
        <img
          alt="alt img"
          width={800}
          height={600}
          src="https://flexy-next-js-dashboard.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin-bg.a9ef922d.svg&w=1920&q=75"
        />
      </Box>
      <Box
        flex={1}
        sx={{
          padding: "50px 100px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "30px",
          }}
        >
          Welcome to Flexy
        </Typography>
        <Box display="flex" gap="12px">
          <Typography
            sx={{
              color: variables.textGray,
            }}
          >
            Already have an Account?
          </Typography>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: variables.primaryBlue,
                fontWeight: 500,
              }}
            >
              Sign In
            </Typography>
          </Link>
        </Box>
        <Box marginTop="25px">
          <Typography>Name</Typography>
          <TextField
            sx={style}
            id="outlined-basic"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box marginTop="25px">
          <Typography>Email Address</Typography>
          <TextField
            sx={style}
            id="outlined-basic"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box marginTop="14px">
          <Typography>Password</Typography>
          <TextField
            id="outlined-basic"
            fullWidth
            type="password"
            variant="outlined"
            sx={style}
          />
        </Box>

        <Box margin="20px 0">
          <Button
            fullWidth
            sx={{
              background: variables.primaryRed,
              color: "white",
              "&:hover": {
                background: variables.primaryBlue,
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Divider
          sx={{
            color: variables.textGray,
          }}
        >
          or sign in with
        </Divider>
        <Box marginTop="20px">
          <Button
            sx={{
              outlineColor: "red",
            }}
            variant="outlined"
            fullWidth
            color="info"
          >
            <Box padding="5px 0" display="flex" gap="8px" alignItems="center">
              <GoogleIcon
                sx={{
                  color: variables.primaryRed,
                }}
              />
              <Typography
                sx={{
                  color: "black",
                }}
              >
                Google
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box display="flex" gap="12px" marginTop="14px">
          <Box flex={1}>
            <Button variant="outlined" fullWidth color="info">
              <Box padding="5px 0" display="flex" gap="8px" alignItems="center">
                <FacebookIcon
                  sx={{
                    color: variables.primaryRed,
                  }}
                />
                <Typography
                  sx={{
                    color: "black",
                  }}
                >
                  Facebook
                </Typography>
              </Box>
            </Button>
          </Box>
          <Box flex={1}>
            <Button variant="outlined" fullWidth color="info">
              <Box padding="5px 0" display="flex" gap="8px" alignItems="center">
                <TwitterIcon
                  sx={{
                    color: variables.primaryBlue,
                  }}
                />
                <Typography
                  sx={{
                    color: "black",
                  }}
                >
                  Twitter
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: variables.primaryBlue,
    },
  },
};

export default register;

import { AUTH_LOGIN } from "@/api";
import Loading from "@/components/Loading/Loading";
import { setAuth } from "@/store/slices/authSlice";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import variables from "../styles/global.module.scss";

function Login() {
  // const count = useSelector((state) => state.counter.value)
  const router = useRouter();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [loginMessage, setLoginMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        AUTH_LOGIN,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
      const data = response.data.data;
      const accessToken = data.accessToken;
      const userId = data.id;
      setLoginMessage(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("dashboard");
      }, 2000);
      dispatch(setAuth(true));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("userId", userId);
    } catch (err) {
      setLoginMessage(true);
    }
  };

  return (
    <Box display="flex">
      <Loading loading={loading} />
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
      <FormControl>
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
              New to Flexy?
            </Typography>
            <Link href="/register" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: variables.primaryBlue,
                  fontWeight: 500,
                }}
              >
                Create an account
              </Typography>
            </Link>
          </Box>
          <Typography
            sx={{
              color: variables.primaryRed,
              visibility: loginMessage == false ? "hidden" : "visible",
            }}
          >
            Login failed
          </Typography>
          <Box marginTop="25px">
            <Typography>Email Address</Typography>
            <TextField
              sx={style}
              id="outlined-basic"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleLogin}
            >
              Sign in
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
                <Box
                  padding="5px 0"
                  display="flex"
                  gap="8px"
                  alignItems="center"
                >
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
                <Box
                  padding="5px 0"
                  display="flex"
                  gap="8px"
                  alignItems="center"
                >
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
      </FormControl>
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

export default Login;

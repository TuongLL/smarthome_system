import { Box } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loading({ loading }) {
  
  if (loading == true) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          height: "100%",
          width: "100%",
          left:0,
          top:0,
          zIndex: 1500,
          background: "rgba(51,51,51,0.6)",
        }}
      >
        <ColorRing
          visible={loading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </Box>
    );
    return <></>
  }
}

export default Loading;

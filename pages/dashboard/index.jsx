import Content from "@/components/Content/Content";
import Loading from "@/components/Loading/Loading";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard({ collapsedState }) {

  return (
    <Box>
      <Content collapsedState={collapsedState} />
    </Box>
  );
}

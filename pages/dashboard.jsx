import Header from "@/components/Header/Header";
import variables from "../styles/global.module.scss";
import Content from "@/components/Content/Content";
import { Box } from "@mui/material";
export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Content />
    </Box>
  );
}

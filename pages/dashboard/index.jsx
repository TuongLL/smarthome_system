import Content from "@/components/Content/Content";
import { Box } from "@mui/material";
import { realtimeDB } from "../../utils/firebaseSetup";
import { onValue, ref } from "firebase/database";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
export default function Dashboard({ collapsedState }) {
  const [init, setInit] = useState(0)
  useEffect(() => {
    const query = ref(realtimeDB, "result");
    let firstCall = false
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists() && firstCall) {
        if (data.status == 1) {
          toast.success("Good job! Your face mask has been detected and you are complying with our safety measures. Thank you for helping to keep yourself and others safe from COVID-19.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        else {
          toast.error("Attention: Please wear a face mask before entering this area. Failure to comply with this safety measure puts yourself and others at risk of contracting COVID-19. Thank you for your cooperation.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
      firstCall = true
    });
  }, []);

  return (
    <Box>
      <Content collapsedState={collapsedState} />
    </Box>
  );
}

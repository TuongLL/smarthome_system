import DashboardLayout from "@/components/DashboardLayout";
import { Roboto } from "next/font/google";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store/store";
import variables from "../styles/global.module.scss";
import "../styles/global.scss";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps, router }) {
  const [collapsedState, setCollapsedState] = React.useState(false);
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <ProSidebarProvider>
        <Provider store={store}>
        
            <main
              className={roboto.className}
              style={{
                backgroundColor: variables.primaryBg,
                position: "relative",
              }}
            >
              <DashboardLayout
                collapsedState={collapsedState}
                setCollapsedState={setCollapsedState}
              >
                <Component {...pageProps} collapsedState={collapsedState} />
              </DashboardLayout>
            </main>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          
        </Provider>
      </ProSidebarProvider>
    );
  }
  return (
    <Provider store={store}>
      <main
        className={roboto.className}
        style={{ backgroundColor: variables.primaryBg, position: "relative" }}
      >
        <Component {...pageProps} />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  );
}

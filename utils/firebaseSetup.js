// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxyujEYoy-NFS1ILWminLsDOzt25AP4ks",
  authDomain: "mask-detection-bkuhcm.firebaseapp.com",
  databaseURL: "https://mask-detection-bkuhcm-default-rtdb.firebaseio.com",
  projectId: "mask-detection-bkuhcm",
  storageBucket: "mask-detection-bkuhcm.appspot.com",
  messagingSenderId: "1065559578155",
  appId: "1:1065559578155:web:bbe00a52527ea001e7fc6e",
};

const app = initializeApp(firebaseConfig);
// Tham chiếu tới cơ sở dữ liệu
export const realtimeDB = getDatabase(app);

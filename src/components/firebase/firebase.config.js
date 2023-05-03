// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnMXLkhW2_q1ZhIimE2j6DgET0ixnj4p4",
  authDomain: "the-hungry-cat-6d5c1.firebaseapp.com",
  projectId: "the-hungry-cat-6d5c1",
  storageBucket: "the-hungry-cat-6d5c1.appspot.com",
  messagingSenderId: "529511934400",
  appId: "1:529511934400:web:9b5c1f4ec65d74f4224025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
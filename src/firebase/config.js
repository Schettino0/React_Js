import { getFirestore } from "firebase/firestore/lite";
import { getAuth , GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx_fF_wEINcDdxc4aMvgAjcZCiF6e5RvM",
  authDomain: "react-bf2e6.firebaseapp.com",
  projectId: "react-bf2e6",
  storageBucket: "react-bf2e6.appspot.com",
  messagingSenderId: "995649153455",
  appId: "1:995649153455:web:598c789eef7cfba8f3a75a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();




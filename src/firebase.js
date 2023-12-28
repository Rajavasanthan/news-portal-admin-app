import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyCdK9MpiVCAKRmhx-oHOIWPaCYW3Lu8E8w",
  authDomain: "zenclass-e22a4.firebaseapp.com",
  projectId: "zenclass-e22a4",
  storageBucket: "zenclass-e22a4.appspot.com",
  messagingSenderId: "188477215554",
  appId: "1:188477215554:web:dec00ade311c0adb176edb",
  measurementId: "G-CXQQZEJXSS",
});

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    return { user };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

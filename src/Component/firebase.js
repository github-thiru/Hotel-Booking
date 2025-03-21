import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInAnonymously
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBer6SOLCYlq49EYPjll_djYNptXpoH-Qk",
    authDomain: "hotel-booking-2b074.firebaseapp.com",
    projectId: "hotel-booking-2b074",
    storageBucket: "hotel-booking-2b074.firebasestorage.app",
    messagingSenderId: "285698915337",
    appId: "1:285698915337:web:9a8d7040c0dcb5c4cf4cd8",
    measurementId: "G-PDSXXW3K6F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (navigate) => {
  try {
    await signInWithPopup(auth, googleProvider);
    toast.success("Google Sign-in Successful!");
    navigate("/dashboard");
  } catch (error) {
    toast.error("Google Sign-in Failed!");
  }
};

const loginWithEmail = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successful!");
    navigate("/dashboard");
  } catch (error) {
    toast.error("Invalid email or password!");
  }
};

const registerWithEmail = async (email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Account Created Successfully!");
    navigate("/dashboard");
  } catch (error) {
    toast.error("Sign-up Failed!");
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.info("Password Reset Email Sent!");
  } catch (error) {
    toast.error("Error Sending Reset Email!");
  }
};



const guestLogin = async (navigate) => {
  console.log("Guest Login Clicked!"); // Debugging
  try {
    const userCredential = await signInAnonymously(auth);
    console.log("Guest Login Successful:", userCredential);
    toast.success("Guest Login Successful!");
    navigate("/dashboard");
  } catch (error) {
    console.error("Guest Login Error:", error.code, error.message);
    toast.error(`Guest Login Failed: ${error.message}`);
  }
};



const logout = async (navigate) => {
  try {
    await signOut(auth);
    toast.success("Logged Out Successfully!");
    navigate("/auth");
  } catch (error) {
    toast.error("Logout Failed!");
  }
};

export { auth, signInWithGoogle, loginWithEmail, registerWithEmail, resetPassword, guestLogin, logout };
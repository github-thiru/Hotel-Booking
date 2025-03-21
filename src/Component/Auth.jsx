import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  loginWithEmail,
  registerWithEmail,
  resetPassword,
  guestLogin
} from "./firebase"; 

// import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [resetMode, setResetMode] = useState(false);

  const handleSubmit = () => {
    if (resetMode) {
      resetPassword(email);
      setResetMode(false);
    } else if (isLogin) {
      loginWithEmail(email, password, navigate);
    } else {
      registerWithEmail(email, password, navigate);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-img">
        <h2> Welcome to Hotel Haven</h2>
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" width={300}/>
      </div>
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        {!resetMode && (
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        )}

        <button onClick={handleSubmit}>
          {resetMode ? "Send Reset Link" : isLogin ? "Login" : "Sign Up"}
        </button>

        {!resetMode && (
          <button className="forgot-password" onClick={() => setResetMode(true)}>Forgot Password?</button>
        )}

        <div className="separator">OR</div>

        <button className="google-btn" onClick={() => signInWithGoogle(navigate)}>Login with Google</button>
        <button className="guest-btn" onClick={() => guestLogin(navigate)}>Guest Login</button>

        {!resetMode && (
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Sign Up" : " Login"}
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
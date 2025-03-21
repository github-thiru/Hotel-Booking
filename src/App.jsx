import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Landingpage from "./Landingpage/Landingpage.jsx";
import Auth from "./Component/Auth.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";

// import jwt_decode from "jwt-decode";
// import "./Register.css"; // Import external CSS

const App = () => {
  return (
<>
{/* //  <Landingpage />  */}
{/* <Auth /> */}

<Routes>
  <Route path="/" element={<Landingpage />} />
  <Route path="/auth" element={<Auth />} />
  <Route path="/dashboard" element={<Dashboard />} />

</Routes>

</>

  );
};

export default App;

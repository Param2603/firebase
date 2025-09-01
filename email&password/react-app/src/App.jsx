import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
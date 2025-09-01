import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../config/firbase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        console.log(res);
        alert("login successfull");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });

    setUserData({ email: "", password: "" });
  }
  return (
    <div>
      <h1>Login page</h1>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Enter your email "
        />
        <input
          type="text"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Enter your password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
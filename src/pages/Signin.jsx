import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Authentication/auth.js";

export default function Signin() {
  const [errMsg, setErrMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setErrMsg(""), 2000);
  }, [errMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const credentials = {
      userName,
      password,
    };

    const Authentication = Auth(credentials);
    console.log(Authentication);
    setErrMsg(Authentication.errMsg);
    if (!Authentication.isError)
      await fetch("http://localhost:5000/sign-in", {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (result) => {
        result = await result.json();
        console.log(result);
        setErrMsg(result.msg);
        if (result.isUserLogin) {
          localStorage.setItem("userName", userName);
          localStorage.setItem("password", password);
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          },200);
        }
      });
  };

  return (
    <div className="container">
      <div className="log-in-page">
        <h1>videoNex</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" id="user-name">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            autoFocus="on"
            required
            onChange={(e) => setUserName(e.target.value)}
            maxLength={8}
          />
          <label htmlFor="password" id="password">
            Password
          </label>
          <input
            type={!showPassword?"password":"text"}
            
            name="password"
            id="password"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
            maxLength={8}
          />
          <button type="submit" id="login-btn">
            Log In
          </button>
        </form>
        <a href="/sign-up" style={{ textDecoration: "none", color: "#1D5B79" }}>
          Don't have account? Sign Up
        </a>
        <p
          className="err-msg"
          style={{
            transform: errMsg === "" ? "translateY(-100px)" : "translateY(0px)",
            backgroundColor:
              errMsg === "Login Successfully!" ? "green" : "rgb(255, 0, 0)",
          }}
        >
          {errMsg}
        </p>
      </div>
    </div>
  );
}

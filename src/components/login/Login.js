import React, { useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../inputForm/InputForm";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Log the user in without checking email verification
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful, navigating to /main");
      navigate("/main"); // Redirect to the main page
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setError("Invalid Email or Password");
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>Authentic flavors delivered right to your door</h1>
        <p>We are glad to have you on our platform</p>
        <img
          src="/food-7.png"
          alt="Top Left Decoration"
          className="corner-image bottom-right"
        />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <h1>
          Fast<span>Food</span>
        </h1>
        <p>Login into your account!</p>
        <InputForm
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <InputForm
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          error={error}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;

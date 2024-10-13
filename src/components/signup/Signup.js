import React, { useState } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import InputForm from "../inputForm/InputForm";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
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
      <form onSubmit={handleSignup} className="login-form">
        <h1>
          Fast<span>Food</span>
        </h1>
        <p>Create your account</p>
        <InputForm
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
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
        />
        <button type="submit">Login</button>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;

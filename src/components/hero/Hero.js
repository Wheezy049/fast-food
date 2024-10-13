import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-box">
        <img
          src="/food-6.png"
          alt="Top Left Decoration"
          className="corner-image top-left"
        />
        <h1>"Experience the Essence of Nigeria, Right at Your Doorstep!"</h1>
        <img
          src="/food-7.png"
          alt="Top Left Decoration"
          className="corner-image bottom-right"
        />
        <button>Create account</button>
      </div>
    </div>
  );
}

export default Hero;

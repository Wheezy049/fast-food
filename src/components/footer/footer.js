import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="box-1">
        <h3>Sit Back and Enjoy Fresh, Hot Food</h3>
        <p>
          our food will arrive hot, ready to satisfy your cravings and make you
          feel at home.
        </p>
        <button>
          Get Started
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="box-2">
        <h1>
          Fast<span>Food</span>
        </h1>
        <div className="flex-1">
          <div className="flex-2">
            <p>Privacy Policy</p>
            <span>.</span>
            <p>Terms of Use</p>
          </div>
          <p>© 2023 with naijachow</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

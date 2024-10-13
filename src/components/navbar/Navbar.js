import React, { useContext } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./navbar.scss";
import { UserContext } from "../context/context";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const { count, toggleCart, currentUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="navbar">
        {currentUser ? (
          <h1>
            <Link to="/main">
              Fast<span>Food</span>
            </Link>
          </h1>
        ) : (
          <h1>
            <Link to="/">
              Fast<span>Food</span>
            </Link>
          </h1>
        )}
        {isLandingPage && (
          <div className="nav-button">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        )}
        <div className="flex-6">
          <button onClick={toggleCart} className="nav-cart">
            <span>Cart</span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clip-path="url(#clip0_1_125)">
                  <path
                    d="M11 9.5H13V6.5H16V4.5H13V1.5H11V4.5H8V6.5H11V9.5ZM7 18.5C5.9 18.5 5.01 19.4 5.01 20.5C5.01 21.6 5.9 22.5 7 22.5C8.1 22.5 9 21.6 9 20.5C9 19.4 8.1 18.5 7 18.5ZM17 18.5C15.9 18.5 15.01 19.4 15.01 20.5C15.01 21.6 15.9 22.5 17 22.5C18.1 22.5 19 21.6 19 20.5C19 19.4 18.1 18.5 17 18.5ZM7.17 15.25L7.2 15.13L8.1 13.5H15.55C16.3 13.5 16.96 13.09 17.3 12.47L21.16 5.46L19.42 4.5H19.41L18.31 6.5L15.55 11.5H8.53L8.4 11.23L6.16 6.5L5.21 4.5L4.27 2.5H1V4.5H3L6.6 12.09L5.25 14.54C5.09 14.82 5 15.15 5 15.5C5 16.6 5.9 17.5 7 17.5H19V15.5H7.42C7.29 15.5 7.17 15.39 7.17 15.25Z"
                    fill="#16AD32"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_125">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              ({count})
            </span>
          </button>
          {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

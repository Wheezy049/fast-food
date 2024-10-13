import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

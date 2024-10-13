import React, { useState, useEffect, useContext } from "react";
import Cart from "../cart/Cart";
import LoadingSpinner from "../loader/LoadingSpinner";
import Menu from "../menu/Menu";
import { UserContext } from "../context/context";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isCartOpen } = useContext(UserContext);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load menu items. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="App">
      <Menu />
      {isCartOpen && <Cart />}
      {/* {isCheckoutOpen && (
        <Checkout  />
      )} */}
    </div>
  );
}

export default Main;

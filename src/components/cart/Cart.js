import React, { useContext } from "react";
import { Plus, Minus, X } from "lucide-react";
import "./cart.scss";
import { UserContext } from "../context/context";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    closeCart,
    total,
    currentUser,
  } = useContext(UserContext);

  return (
    <div className="cart-popup">
      <div className="cart-content">
        <button className="close-btn" onClick={closeCart}>
          <X />
        </button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-flex">
                <span>
                  <img src={item.imageUrl} alt="food" />
                </span>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                  <p>{item.price}</p>
                  <div className="flex-8">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="total">
              <p>Total: ${total.toFixed(2)}</p>
              {currentUser ? (
                <Link
                  to="/checkout"
                  target="_self"
                  style={{ textDecoration: "none" }}
                >
                  <button>Proceed to Checkout</button>
                </Link>
              ) : (
                <Link
                  to="/login"
                  target="_self"
                  style={{ textDecoration: "none" }}
                >
                  <button>Proceed to Checkout</button>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

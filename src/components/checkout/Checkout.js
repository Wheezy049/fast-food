import React, { useContext, useState } from "react";
import "./checkout.scss";
import { UserContext } from "../context/context";
import InputForm from "../inputForm/InputForm";
import { Link } from "react-router-dom";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    postalCode: "",
  });

  const { cartItems, total } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
  };

  return (
    <div className="checkout">
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-content">
              <div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: "-10px" }}>{item.text}</p>
              </div>
              <h3>x {item.quantity}</h3>
              <h3>${(item.price * item.quantity).toFixed(2)}</h3>
            </div>
          ))}
        </div>
        <span>
          <h3>Total:</h3>
          <h3>${total.toFixed(2)}</h3>
        </span>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h3>Payment</h3>
        <InputForm
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputForm
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputForm
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <InputForm
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
        <InputForm
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <div className="checkout-input">
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/success" style={{ textDecoration: "none" }}>
          <button type="submit">Place Order</button>
        </Link>
      </form>
    </div>
  );
}

export default Checkout;

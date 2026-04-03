import React from "react";

function Cart({ cart }) {
  return (
    <div className="cart-container">
  <h2 className="cart-title">Your Cart</h2>

  {cart.map((item, index) => (
    <div className="cart-item" key={index}>
      <span>{item.name}</span>
      <span>₹{item.price}</span>
    </div>
  ))}

  <div className="cart-total">
    Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
  </div>

  <button className="checkout-btn">Checkout</button>
</div>
  );
}

export default Cart;
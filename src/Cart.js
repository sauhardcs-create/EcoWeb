import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Wrapper to use navigate in class
function CartWrapper(props) {
  const navigate = useNavigate();
  return <Cart {...props} navigate={navigate} />;
}

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  handleCheckout = () => {
    this.props.setCart([]);
    alert("Order placed successfully!");
    this.props.navigate("/");
  };

  render() {
    const { cart } = this.props;

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

        <button className="checkout-btn" onClick={this.handleCheckout}>
          Checkout
        </button>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired
};

export default CartWrapper;
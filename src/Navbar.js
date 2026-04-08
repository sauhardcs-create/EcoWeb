import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "10px" }}>Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </div>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired
};
export default Navbar;
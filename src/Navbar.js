import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "10px" }}>Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </div>
  );
}

export default Navbar;
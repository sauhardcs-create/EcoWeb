import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product, addToCart }) {
  const validStock = typeof product.stock === "boolean";


  const stockStyle = {
    color: product.stock ? "green" : "red",
    fontWeight: "bold"
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      {validStock ? (
        <p style={stockStyle}>
          {product.stock ? "In Stock" : "Out of Stock"}
        </p>
      ) : (
        <p style={{ color: "red" }}>Invalid stock value</p>
      )}

      <button
        onClick={() => addToCart(product)}
        disabled={!product.stock}
      >
        Add to Cart
      </button>
    </div>
  );
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool
  }).isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductCard;
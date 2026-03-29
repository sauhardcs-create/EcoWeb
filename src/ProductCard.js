import React from "react";

function ProductCard({ product, addToCart }) {
  const validStock = typeof product.stock === "boolean";

  const cardStyle = {
    border: "1px solid black",
    padding: "10px",
    marginBottom: "10px",
    width: "250px"
  };

  const stockStyle = {
    color: product.stock ? "green" : "red",
    fontWeight: "bold"
  };

  return (
    <div style={cardStyle}>
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

export default ProductCard;
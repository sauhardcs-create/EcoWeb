import React from "react";
import ProductCard from "./ProductCard";

function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 50000, stock: true },
    { id: 2, name: "Phone", price: 20000, stock: true },
    { id: 3, name: "Headphones", price: 2000, stock: false }
  ];

  return (
    <div className="products-container">
      <h2>Products</h2>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
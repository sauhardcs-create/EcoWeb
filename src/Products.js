import React from "react";
import ProductCard from "./ProductCard";

function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 50000, stock: true },
    { id: 2, name: "Phone", price: 20000, stock: true },
    { id: 3, name: "Headphones", price: 2000, stock: false }
  ];

  return (
    <div className="products-page">
      <h2 className="products-title">Products</h2>
      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
import React, { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome to our E-Commerce Store!");
  }, []);

  return (
    <div className="home">
  <h1>{message}</h1>
  <p>Find the best gadgets at unbeatable prices</p>
  <button>Shop Now</button>
</div>
  );
}

export default Home;
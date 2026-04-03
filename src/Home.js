import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome to our E-Commerce Store!");
  }, []);

  return (
    <div className="home">
  <h1>{message}</h1>
  <p>Find the best gadgets at unbeatable prices</p>
  <Link to="./Products">
      <button>Shop Now</button>
  </Link>
  
</div>
  );
}

export default Home;
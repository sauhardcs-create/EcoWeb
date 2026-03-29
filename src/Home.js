import React, { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome to our E-Commerce Store!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
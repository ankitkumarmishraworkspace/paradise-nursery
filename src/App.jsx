import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      {!showProducts ? (
        <div>
          {/* ✅ Correct heading */}
          <h1>Welcome to Paradise Nursery</h1>

          <p>Your one-stop shop for beautiful plants 🌱</p>

          {/* ✅ Button with functionality */}
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;

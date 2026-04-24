import React, { useState } from "react";

const plants = [
  // Category 1
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Cactus", price: 8, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Jade Plant", price: 12, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Agave", price: 15, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Haworthia", price: 9, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Sedum", price: 7, category: "Succulents", image: "https://via.placeholder.com/100" },

  // Category 2
  { id: 7, name: "Rose", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulip", price: 18, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 9, name: "Lily", price: 22, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 10, name: "Daisy", price: 14, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 11, name: "Sunflower", price: 16, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 12, name: "Orchid", price: 25, category: "Flowering", image: "https://via.placeholder.com/100" },

  // Category 3
  { id: 13, name: "Fern", price: 11, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 14, name: "Snake Plant", price: 13, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 15, name: "Spider Plant", price: 10, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 16, name: "Peace Lily", price: 17, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 17, name: "Rubber Plant", price: 19, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 18, name: "Areca Palm", price: 21, category: "Indoor", image: "https://via.placeholder.com/100" }
];

function ProductList() {
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, { ...plant, quantity: 1 }]);
    setAdded([...added, plant.id]);
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "green", color: "white" }}>
        <div>
          <a href="/" style={{ marginRight: "10px", color: "white" }}>Home</a>
          <a href="/plants" style={{ marginRight: "10px", color: "white" }}>Plants</a>
          <a href="/cart" style={{ color: "white" }}>Cart 🛒 ({cart.length})</a>
        </div>
      </nav>

      <h1>Plants</h1>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => addToCart(plant)}
                  disabled={added.includes(plant.id)}
                >
                  {added.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

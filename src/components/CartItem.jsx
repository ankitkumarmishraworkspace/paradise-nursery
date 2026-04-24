import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))
      )}

      <h2>Total Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br /><br />
      <a href="/plants">Continue Shopping</a>
    </div>
  );
}

export default CartItem;

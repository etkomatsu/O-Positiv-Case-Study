import React from "react";
import styles from "../scss/addToCart.scss";

export default function AddToCart(props) {
  props.addToCart();
  return (
    <button className="cart-button" onClick={props.addToCart}>
      Add to Cart
    </button>
  );
}

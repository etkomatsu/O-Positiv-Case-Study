import React from "react";
import styles from "../scss/addToCart.scss";

export default function AddToCart(props) {
  
  return (
    <button className="cart-button" onClick={props.addToCart}>
      Add to Cart - {props.currentPrice}
    </button>
  );
}

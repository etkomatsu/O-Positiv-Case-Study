import React, { useEffect } from "react";
import styles from "../scss/addToCart.scss";
import products from "../components/Products";
import afterPay from "../assets/afterPay.png";

export default function AddToCart(props) {
  let oneTimeText;
  if (props.purchaseType === "one_time") {
    if (props.quantity === 1) {
      oneTimeText = <p className="afterPayText" ><img src={afterPay}/> available for orders above $45</p>
    }
    if (props.quantity === 2) {
      oneTimeText = <p className="afterPayText">Only $17.50 with <img src={afterPay}/> <br></br>in 4 interest-free payments"</p>
    }
    if (props.quantity === 3) {
      oneTimeText = <p className="afterPayText">Only $24.75 with <img src={afterPay}/>  <br></br>in 4 interest-free payments"</p>
    }
  }
  let priceText;
  if (props.purchaseType === "one_time" && props.quantity === 1) {
    priceText = <p className="priceText">ADD TO CART - ${props.currentPrice}</p>
  } else {
    let maxPrice = props.quantity * products[0].one_time_price[0];
    if (maxPrice.toString().length > 5) maxPrice = Math.ceil(maxPrice);
    priceText = <p className="priceText"> ADD TO CART - <strike>${maxPrice}</strike> ${props.totalPrice}</p>
  }
  return (
    <div className="cart-button-container">
      {oneTimeText}
      <button className="cart-button" onClick={props.addToCart}>
        {priceText}
      </button><br></br>
    </div>
  );
}

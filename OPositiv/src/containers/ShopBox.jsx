import React from "react";
import AddToCart from "../components/AddToCart.jsx";
import PurchaseContainer from "./PurchaseContainer.jsx";
import { useState, useEffect } from "react";
import styles from "../scss/shopbox.scss";
import products from "../components/Products";
import ToggleTheme from "../components/ToggleTheme.jsx";

const ShopBox = (props) => {
  const [purchaseType, setPurchaseType] = useState("subscribe");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState("");
  const [currentPrice, setCurrentPrice] = useState(
    products[0].subscription_price
  );

  const handleChange = (value) => {
    setPurchaseType(value);
    if (value === "subscribe") {
      setCurrentPrice(products[0].subscription_price);
    }
    if (value === "one_time") {
      setCurrentPrice(products[0].one_time_price);
    }
  };

  function addToCart() {
    setCart(`You have ${purchaseType} in your cart`);
    // alert(cart);
    console.log("hi");
  }

  return (
    <div className="shop-box">
      <PurchaseContainer handleChange={handleChange} />
      <AddToCart addToCart={addToCart} />
      <p className="verbiage">
        {" "}
        60-Day Happiness Guaranteed {purchaseType} {currentPrice}
      </p>
      <p>{purchaseType}</p>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default ShopBox;

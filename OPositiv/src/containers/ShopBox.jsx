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
  const [cart, setCart] = useState("Item Name | Type | Count \n");
  const [currentPrice, setCurrentPrice] = useState(
    products[0].subscription_price
  );
  useEffect(() => {
    if (cart !== "Item Name | Type | Count \n") alert(cart);
  }, [cart]);

  const handlePurchaseChange = (value) => {
    setPurchaseType(value);
    if (value === "subscribe") {
      setCurrentPrice(products[0].subscription_price);
    }
    if (value === "one_time") {
      setCurrentPrice(products[0].one_time_price);
    }
  };
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };
  function addToCart() {
    let purchaseString;
    purchaseType === "subscribe"
      ? (purchaseString = "Sub (ships every month)")
      : (purchaseString = "One time");
    setCart(
      `${cart}MENO - ${products[0].title} | ${purchaseString} | ${quantity} \n`
    );
    console.log(purchaseString);
    console.log(cart);
    // console.log("hi");
  }

  return (
    <div className="shop-box">
      <PurchaseContainer
        handlePurchaseChange={handlePurchaseChange}
        handleQuantityChange={handleQuantityChange}
        quantity={quantity}
      />
      <AddToCart addToCart={addToCart} currentPrice={currentPrice} />
      <p className="verbiage"> 60-Day Happiness Guaranteed</p>
      <p>{purchaseType}</p>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default ShopBox;

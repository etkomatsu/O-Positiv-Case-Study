import React from "react";
import AddToCart from "../components/AddToCart.jsx";
import PurchaseContainer from "./PurchaseContainer.jsx";
import { useState, useEffect } from "react";
import styles from "../scss/shopbox.scss";
import products from "../components/Products";

const ShopBox = (props) => {
  const [purchaseType, setPurchaseType] = useState("subscribe");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState("Item Name | Type | Count \n");
  const [currentPrice, setCurrentPrice] = useState(
    products[0].subscription_price[0]
  );
  const [totalPrice, setTotalPrice] = useState(currentPrice * quantity);

  useEffect(() => {
    if (cart !== "Item Name | Type | Count \n") alert(cart);
  }, [cart]);

  const handlePurchaseChange = async (value) => {
    setPurchaseType(value);
    }
  
  useEffect(() => {
    if (purchaseType === "subscribe"){
      setCurrentPrice(products[0].subscription_price[quantity - 1])
    };
    if (purchaseType=== "one_time") {
      setCurrentPrice(products[0].one_time_price[quantity - 1]);
    };
  }, [purchaseType, quantity])

  const handleQuantityChange = (value) => {
    setQuantity(value);
    handlePurchaseChange(purchaseType);
    console.log("handleQuantityChange",quantity, currentPrice, totalPrice);
  };

  useEffect(() => {
    setTotalPrice(currentPrice * quantity);
      console.log("inside use effect", currentPrice)}, 
      [quantity, currentPrice, purchaseType])

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
        purchaseType={purchaseType}
      />
      <AddToCart
        addToCart={addToCart}
        currentPrice={currentPrice}
        quantity={quantity}
        totalPrice={totalPrice}
        purchaseType={purchaseType}
      />
      <p className="verbiage"> 60-day happiness guaranteed</p>
      <div>
      </div>
    </div>
  );
};

export default ShopBox;

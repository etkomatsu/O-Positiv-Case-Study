import React from "react";

export default function handlePurchaseTypeButton(arg) {
  if (arg === "subscribe") {
    setPurchaseType("subscribe");
    setCurrentPrice(products[0].subscription_price);
  }
  if (arg === "one_time") {
    setPurchaseType("one_time");
    setCurrentPrice(products[0].one_time_price);
  }
  return;
}

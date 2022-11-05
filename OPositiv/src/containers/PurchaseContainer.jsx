import { useState, useEffect } from "react";
import products from "../components/Products.jsx";
import style from "../scss/purchaseContainer.scss";

const PurchaseContainer = (props) => {
  return (
    <div>
      <div className="shop-selector">
        <p className="purchase-type-header">1. Select Purchase Type</p>
        <label>
          <input
            type="radio"
            name="purchase-type"
            value="subscribe"
            defaultChecked
            onChange={() => props.handlePurchaseChange("subscribe")}
          />
          <span />
          <div>
            <p className="purchase-type-heading">Subcribe and Save</p>
            <p className="purchase-type-subheading">Easy to cancel, anytime</p>
            <p className="purchase-type-free-shipping">Free Shipping Always</p>
          </div>
          <div>
            <p className="price">$31.99</p>
            <p className="purchase-type-subheading">/Bottle</p>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="purchase-type"
            value="one_time"
            onChange={() => props.handlePurchaseChange("one_time")}
          />
          <span />
          <div>
            <p className="purchase-type-heading">One Time</p>
            <p className="purchase-type-subheading">One Time Purchase</p>
          </div>
          <div>
            <p className="price">$39.99</p>
            <p className="purchase-type-subheading">/Bottle</p>
          </div>
        </label>
      </div>
      <div className="shop-selector">
        <p className="quantity-heading">Quantity</p>
        <div className="quantity-container">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="quantity"
              id={props.quantity === item ? "selected" : ""}
              onClick={() => props.handleQuantityChange(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <p className="quantity-subheading">1 bottle ships every 1 month</p>
      </div>
    </div>
  );
};

export default PurchaseContainer;

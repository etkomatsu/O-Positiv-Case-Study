import { useState, useEffect } from "react";
import handlePurchaseTypeButton from "../components/SetPurchaseType.jsx";
import products from "../components/Products.jsx";

const PurchaseContainer = (props) => {
  return (
    <div>
      <div className="shop-selector">
        <p className="purchase-type-header">1. Select Purchase Type</p>
        <br></br>
        <label>
          <input
            type="radio"
            name="purchase-type"
            value="subscribe"
            defaultChecked
            onChange={() => props.handleChange("subscribe")}
          />
          Subcribe
          <p className="purchase-type-subheading">Subscribe and Save</p>
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="purchase-type"
            value="one_time"
            onChange={() => props.handleChange("one_time")}
          />
          One Time
        </label>
      </div>
      <div className="shop-selector">
        <p className="quantity-heading">Quantity</p>
        <br></br>
        <p className="quantity-subheading">1 bottle ships every 1 month</p>
      </div>
    </div>
  );
};

export default PurchaseContainer;

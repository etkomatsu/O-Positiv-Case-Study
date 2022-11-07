import products from "../components/Products.jsx";
import style from "../scss/purchaseContainer.scss";

const PurchaseContainer = (props) => {
  let quantityText;
  if (props.purchaseType === "subscribe") {
    if (props.quantity === 1 || props.quantity === 2) {
      quantityText = (
        <p className="quantity-text">
          {props.quantity} bottle ships every {props.quantity} month
        </p>
      );
    }
    if (props.quantity === 3) {
      quantityText = (
        <p className="quantity-text">
          Congrats, you’ve selected our best value! <br />3 bottles ship every 3
          months
        </p>
      );
    }
  }
  return (
    <>
      <div className="shop-selector">
        <div className="purchase-type-container">
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
            <div className="purchase-type-subcontainer">
              <div>
                <p className="purchase-type-heading">Subcribe & Save</p>
                <p className="purchase-type-subheading">
                  Easy to cancel, anytime
                </p>
                <p className="purchase-type-free-shipping">
                  Free Shipping Always
                </p>
              </div>
              <div>
                <p className="price">
                  ${products[0].subscription_price[props.quantity - 1]}
                </p>
                <p className="purchase-type-subheading">/BOTTLE</p>
              </div>
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
            <div className="purchase-type-subcontainer">
              <div>
                <p className="purchase-type-heading">One Time</p>
                <p className="purchase-type-subheading">One Time Purchase</p>
              </div>
              <div>
                <p className="price">
                  ${products[0].one_time_price[props.quantity - 1]}
                </p>
                <p className="purchase-type-subheading">/BOTTLE</p>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="shop-selector">
        <div className="quantity-container">
          <div className="quantity-subcontainer">
            <p className="purchase-type-header">2. Quantity</p>
            <div className="quantity-button-container">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="quantity-button"
                  id={props.quantity === item ? "selected" : ""}
                  onClick={() =>
                    props.handleQuantityChange(item, props.purchaseType)
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {quantityText}
        </div>
      </div>
    </>
  );
};

export default PurchaseContainer;

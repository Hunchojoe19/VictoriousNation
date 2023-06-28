import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import VNCLogo from "../assets/images/VNCLogo.png";

const Paypal = () => {
  const [amounts, setAmounts] = React.useState("");
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  return (
    <div className="paypal-container">
      <div className="second-div">
        <div className="paypal-con">
          <img src={VNCLogo} alt="vnc-logo" />
          <p>Support VNC</p>
          <label>Please Add Amount </label>
          <input
            type="number"
            className="inputs"
            value={amounts}
            onChange={(e) => setAmounts(e.target.value)}
          />
          <PayPalScriptProvider
            options={{
              "client-id": CLIENT_ID,
            }}
          >
            <PayPalButtons
              disabled={false}
              forceReRender={[amounts]}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: amounts,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (data) {
                  // Your code here after capture the order
                  alert(
                    "Transaction completed by " + data.payer.name.given_name
                  );
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Paypal;

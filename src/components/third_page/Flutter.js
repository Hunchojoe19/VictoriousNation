import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import VNCLogo from "../assets/images/VNCLogo.png";
import { useNavigate } from "react-router-dom";

export default function App() {
  const PUBLIC_KEY = process.env.REACT_APP_PB_KEY;
  const logo = "../assets/images/VNCLogo.png";

  const [amount, setAmount] = React.useState();

  const navigate = useNavigate();

  const email = "joeante@gmail.com";
  const phone_number = "08077180121";
  const name = "Joe Ante";
  const config = {
    public_key: PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      phone_number,
      name,
    },
    customizations: {
      title: "VNC Support Group",
      description: "Payment for items in cart",
      logo: logo,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const formatNumberWithCommas = (number) => {
    if (typeof number === "number" && !isNaN(number)) {
      return number.toString().replace(/\B(?=(\d{9})+(?!\d))/g, ",");
    }
    return "0";
  };

  return (
    <div className="flutter-container">
      <div className="flutter-second">
        {/* <h1>Hello Test user</h1> */}
        <div className="main-con">
          <img src={VNCLogo} alt="vnc-logo" />
          <p>Support VNC</p>
          <label>Please Add Amount </label>
          <input
            type="number"
            className="inputs"
            value={formatNumberWithCommas(amount)}
            onChange={(e) =>
              setAmount(parseInt(e.target.value.replace(/,/g, "")))
            }
          />
          <button
            className="btn-flutter"
            onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  if (response.status === "completed") {
                    alert("Payment successful");
                  } else {
                    alert("Payment not successful");
                  }
                  console.log(response);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >
            Click Here to Pay
          </button>
          <button className="cancel" onClick={() => navigate("/donations")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

import "../css/OrderSent.css";
import { Link, useLocation } from "react-router-dom";
import ScreenshotComponent from "../components/ScreenshotComponent";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/cartReducer";
import { useEffect } from "react";

const OrderSent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { date, fullname, telephone, email, shipping_adrress, tableHTML } =
    location.state || {};

  useEffect(() => {
    dispatch(resetCart());
  }, []);

  return (
    <div id="ordersent" className="">
      <div className="bg-dark py-2">
        <Link
          to="/"
          className="row d-flex justify-content-center align-items-center"
        >
          <img
            className="logo"
            src="./assets/img/logo.png"
            alt="JM ProSystem"
          />
        </Link>
      </div>
      <div className="container justify-content-center align-items-center mt-3 bg-white py-4">
        <div className="row">
          <div className="text-center">
            <h1>Thanks for shopping with Ingco shop - Jounieh</h1>
            <hr />
          </div>

          <div className="mt-5">
            <p>
              Hi <b>{fullname}</b>
            </p>
            <p>We have finished processing your order.</p>
            <h4 className="mt-4">
              <b>Order detail</b>
            </h4>
            <p>date order sent: {date}</p>
            <div className="mt-3">
              {tableHTML && (
                <div dangerouslySetInnerHTML={{ __html: tableHTML }} />
              )}
            </div>
            <div className="mt-3">
              <ScreenshotComponent />
            </div>
            <div className="mt-4">
              <h4 className="">
                <b>Billing & Shipping address</b>
              </h4>
              <address>
                {fullname}
                <br />
                {telephone}
                <br />
                {shipping_adrress}
                <br />
                {email}
              </address>
            </div>
            <h6>Thanks for shopping with Ingco shop - Jounieh</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSent;

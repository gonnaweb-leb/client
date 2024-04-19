import { useSelector } from "react-redux";
import "../css/ShoppingCart.css";
import Divider from "@mui/material/Divider";
import { CurrencyFormat, getCurrentDate } from "../hooks/Functions";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartReducer";
import { useContext, useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import StoreContext from "../hooks/storeContext";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const { settings } = useContext(StoreContext);
  const delivery = settings && settings[0].attributes.generals.delivery
  const delivery_fees = settings && settings[0].attributes.generals.delivery_fees
  // const Company_Name = settings && settings[0].attributes.generals.companyInfo?.company_Name
  const Address = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.address
  const Telephone = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.telephone
  const Email = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.email

  const form = useRef();
  const dispatch = useDispatch();
  // window.scrollTo(0, 0);
  const cartProducts = useSelector((state) => state.cart.products);

  // const fees = 3;
  const totalPrice = (delivery_fees) => {
    let total = 0;
    cartProducts.forEach((element) => {
      total += element.quantity * element.price;
    });
    delivery_fees ? (total += delivery_fees) : total;
    return total.toFixed(2);
  };

  const [deliveryType, setDeliveryType] = useState("pickup");

  const payment_methode = "Cash on delivery";

  // const handleDelivery = (event) => {
  //   setDeliveryType(event.target.value);
  //   console.log("delivery type: " + event.target.value)
  // };

  const [inputFields, setInputFields] = useState({
    delivery: deliveryType,
    fullname: "",
    telephone: "",
    coupon: "-",
    email: "-",
    shipping_adrress: "-",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validateValues(inputValues) {
    let errors = {};
    if (inputValues.telephone.length != 8) {
      errors.telephone = "Telephone format is not correct";
    }
    if (!inputValues.fullname) {
      errors.fullname = "Full Name is required";
    }
    return errors;
  }
  const handleChange = (e) => {
    e.target.value == "pickup"
      ? setDeliveryType(e.target.value)
      : e.target.value == "ship"
        ? setDeliveryType(e.target.value)
        : null;
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const extractedItems = cartProducts
    .map(
      (item) => `
  <tr>
    <td>${item.code}</td>
    <td>${item.title}</td>
    <td>${CurrencyFormat(item.price)}</td>
    <td>${item.quantity}</td>
    <td>${CurrencyFormat(item.price * item.quantity)}</td>
  </tr>
`
    )
    .join("");

  const tableHTML = `
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      ${extractedItems}
    </tbody>
    <thead>
      ${deliveryType == "pickup"
      ? `<tr><th colspan="4" align="left">Total</th><th>${CurrencyFormat(
        totalPrice()
      )}</th></tr>`
      : `<th colspan="4" align="left">Subtotal</th><th>${CurrencyFormat(
        totalPrice()
      )}</th><tr><th colspan="4" align="left">Delivery fees</th><th>${CurrencyFormat(
        delivery_fees
      )}</th></tr><tr><th align="left">Payment method</th><th colspan="3">${payment_methode}</th></tr><tr><th colspan="4" align="left">Total</th><th>${CurrencyFormat(
        totalPrice(delivery_fees)
      )}</th></tr>`
    }
    </thead>
  </table>
`;

  const templateParams = {
    date: getCurrentDate(),
    delivery: inputFields.delivery,
    fullname: inputFields.fullname,
    telephone: inputFields.telephone,
    email: inputFields.email,
    shipping_adrress: inputFields.shipping_adrress,
    coupon: inputFields.coupon,
    cartProducts: tableHTML,
  };
  const message = "Successfully submitted ✓"
  const finishSubmit = () => {
    notify(message)
    emailjs
      .send(
        "service_wfnf35e",
        "template_7s0depq",
        // form.current,
        templateParams,
        "OhhOo_R6DikUo50f0"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          // console.log("tableHTML!", tableHTML);
          navigate("/ordersent", {
            state: {
              date: getCurrentDate(),
              delivery: inputFields.delivery,
              fullname: inputFields.fullname,
              telephone: inputFields.telephone,
              shipping_adrress: inputFields.shipping_adrress,
              coupon: inputFields.coupon,
              tableHTML: tableHTML,
            },
          });
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: smooth scrolling animation
      });
    }
  });

  const { notify } = useContext(StoreContext);

  return (
    <div id="ShoppingCart">
      <div className="container-fluid pb-3">
        {/* {Object.keys(errors).length === 0 && submitting ? (
          <span className="success">Successfully submitted ✓</span>
        ) : null} */}
        <div className="col-md-6 m-auto text-center">
          <h1>Your Shopping Cart</h1>
          <hr />
          <div className="cart_header bg-light pt-3 pb-3">
            <div className="row align-items-center">
              <div className="col-6">Product</div>
              <div className="col-2 tc">Price</div>
              <div className="col-2 tc">Quantity</div>
              <div className="col-2 tc tr_md">Total</div>
            </div>
          </div>{" "}
          {cartProducts.length ? (
            <>
              <div className="cart-list">
                {cartProducts.map((item) => (
                  <div key={item.id}>
                    <div className="row mb-1">
                      <div className="mt-2 col-12 col-md-12 col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded"
                            src={import.meta.env.VITE_APP_URL + item.image}
                            width="120"
                          />
                          <div className="ms-3">
                            <NavLink
                              className=" nav-link mt-2"
                              // to={`/${item.id}`}
                              to={`/productdesc?${item.title}`}
                              state={{
                                id: item.id,
                                quantityCart: item.quantity,
                              }}
                              replace
                            >
                              <div className="text-left">
                                <h6 className="text-dark text-left">
                                  <b>{item.code}</b>
                                </h6>
                                <h6 className="text-muted">{item.title}</h6>
                              </div>
                            </NavLink>
                            <div className="text-left">
                              <button
                                className="btn btn-outline-warning btn-sm ml-2"
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    removeFromCart({
                                      id: item.id,
                                    })
                                  )
                                }
                              >
                                <i className="fa fa-trash mb-1 text-danger"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center col-12 col-md-4 col-lg-2">
                        <h6 className="text-dark">
                          {CurrencyFormat(item.price)}
                        </h6>
                      </div>
                      <div className="d-flex justify-content-center align-items-center col-12 col-md-4 col-lg-2">
                        <h6 className="text-dark">{item.quantity}</h6>
                      </div>
                      <div className="d-flex justify-content-center align-items-center col-12 col-md-4 col-lg-2">
                        {" "}
                        <h5 className="text-dark">
                          {CurrencyFormat(item.price * item.quantity)}
                        </h5>
                      </div>
                    </div>
                    <Divider />
                  </div>
                ))}
              </div>
              <div className="mt-3 bottom_cart product-wap">
                <div className="mt-3 d-flex flex-row justify-content-end p-2">
                  <div className="col-lg-9 col-md-3 col-sm-6">
                    <h5>SubTotal: </h5>
                    <h6>
                      <small>Tax included</small>
                    </h6>
                  </div>
                  <h5 className="col-lg-2 col-md-3 col-sm-6">
                    {CurrencyFormat(totalPrice())}
                  </h5>
                </div>
              </div>
              <div
                id="shipping_address"
                className="container mt-3 text-dark col-lg bg-light py-3"
              >
                <h2 className="text-center">Shipping Information</h2>
                <hr />

                <form
                  ref={form}
                  className="col-lg-6 col-md-12 m-auto"
                  method="post"
                  role="form"
                  onSubmit={handleSubmit}
                >
                  <div className="p-3">
                    <h3>Contact information</h3>
                    <div className="d-flex">
                      <span className="text-danger">
                        <b>*</b>
                      </span>
                      <span className="smaller">required fields</span>
                    </div>
                    <div className="form-group col-md-12 mt-2 text-left">
                      <label htmlFor="inputname">
                        Full Name{" "}
                        <span className="text-danger">
                          <b>*</b>
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        id="fullname"
                        name="fullname"
                        placeholder="full Name"
                        required
                        value={inputFields.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname ? (
                        <p className="text-danger">
                          Full Name should not be empty!
                        </p>
                      ) : null}
                    </div>
                    <div className="form-group col-md-12 mt-2 text-left">
                      <label htmlFor="inputtelephone">
                        Contact Number{" "}
                        <span className="text-danger">
                          <b>*</b>
                        </span>
                      </label>
                      <input
                        type="number"
                        className="form-control mt-1"
                        id="telephone"
                        name="telephone"
                        placeholder="Phone number: 03123456"
                        required
                        value={inputFields.telephone}
                        onChange={handleChange}
                      />
                      {errors.telephone ? (
                        <p className="text-danger">
                          Telephone should not be empty and not less or more
                          than 8 numbers!
                        </p>
                      ) : null}
                    </div>
                    <div className="form-group col-md-12 mt-2 text-left">
                      <label htmlFor="inputname">Coupon / Gift Card</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        id="coupon"
                        name="coupon"
                        placeholder="Coupon / Gift Card"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="p-3">
                    <h3>Delivery</h3>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="delivery"
                      value={deliveryType}
                      // onChange={handleDelivery}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="pickup"
                        name="delivery"
                        control={<Radio />}
                        label="pickup - Valid only 2 days after order sent!"
                      />
                      <FormControlLabel
                        value="ship"
                        name="delivery"
                        control={<Radio />}
                        label="ship area: Keserwein - Al Matn - Beirut peripheral"
                      />
                    </RadioGroup>
                  </div>
                  {deliveryType == "pickup" ? (
                    <div className="p-3 effect text-left">
                      <div className="pt-3 effect address bg-white px-3">
                        <h6>
                          <b>Ingco shop:</b>
                        </h6>
                        <div>
                          <ReactMarkdown>{Address}</ReactMarkdown>
                          <div className="text-lowercase">
                            <i className="fa fa-phone fa-fw mx-2"> </i>
                            {Telephone}
                            <i className="fa fa-envelope mx-2"></i>
                            {Email}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 effect">
                      <div className="address effect p-3 bg-white">
                        <h3>Shipping address</h3>
                        <div className="form-group col-md-12 text-left">
                          <input
                            type="hidden"
                            id="delivery_fees"
                            name="delivery_fees"
                            value={delivery_fees}
                          />
                          <label htmlFor="inputemail">
                            Email <small>(Optional)</small>
                          </label>
                          <input
                            // required
                            type="email"
                            className="form-control mt-1"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group col-md-12 mt-2 text-left">
                          <label htmlFor="inputmessage">
                            Shipping address
                            <span className="text-danger">
                              <b>*</b>
                            </span>
                          </label>
                          <textarea
                            required
                            className="form-control mt-1"
                            id="shipping_adrress"
                            name="shipping_adrress"
                            placeholder="Your full shipping address"
                            rows="8"
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <div className="form-group col-md-12 mt-2 text-left">
                          <h6>Delivery fees: {delivery ? CurrencyFormat(delivery_fees) : "Upon request"}</h6>
                          <h6>Payment method: Cash on delivery</h6>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-end mt-2 d-flex justify-content-around">
                    <NavLink
                      to="/products"
                      className="btn btn-success-light ml-2"
                    >
                      Continue Shopping
                    </NavLink>
                    <button type="submit" className="btn btn-success-dark ml-2">
                      Check Out
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div>
              <p>Your Shopping Cart is Empty!</p>
              <div className="d-flex flex-row align-items-center mt-3 p-2 rounded">
                <NavLink
                  to="/products"
                  className="text-light btn btn-success-dark ml-2 pay-button"
                >
                  Check our products
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

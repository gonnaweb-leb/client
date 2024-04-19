import "./DrawerFromRight.css";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { CurrencyFormat } from "../../hooks/Functions";
import { Link, NavLink } from "react-router-dom";
// import { Link, NavLink } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";

export default function DrawerFromRight({
  cartProducts,
  anchor,
  state,
  toggleDrawer,
}) {
  // const [searchParams, setSearchParams] = useSearchParams({ id: 12 });
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    cartProducts.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total.toFixed(2);
  };

  return (
    // <Fragment key={anchor}>
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      role="presentation"
      onClose={toggleDrawer(anchor, false)}
    >
      <div className="container mb-5">
        <div className="d-flex justify-content-center row">
          <div className="">
            <div className="d-flex flex-row justify-content-between align-items-center cart_header p-2">
              <button
                className="btn btn-outline-reset btn-sm ml-2"
                type="button"
                onClick={toggleDrawer("right", false)}
              >
                {/* <i className="fa fa-times mb-1 text-dark"></i> */}
                <i className="far fa-times-circle text-dark"></i>
              </button>
              <span className="cart_title mx-3">
                <b>Shopping cart</b>
              </span>
              <button
                className="btn btn-outline-reset btn-sm ml-2"
                type="button"
                onClick={() => dispatch(resetCart())}
              >
                <i className="fa fa-shopware mb-1 text-dark"></i>
              </button>
            </div>
            <Divider />
            {cartProducts.length ? (
              <>
                <div className="cart-list">
                  {cartProducts.map((item) => (
                    <div className="d-flex justify-content-between cart_layout" key={item.id}>
                      <div className="d-flex align-items-center">
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
                      <NavLink
                        onClick={toggleDrawer("right", false)}
                        className="cart-item nav-link mt-2 my-1 mx-1"
                        to={`/productdesc?${item.title}`}
                        state={{
                          id: item.id,
                          // subcatTitle:
                          //   item.attributes.subcategories.data[0].attributes
                          //     .title,
                        }}
                      >
                        <div className="d-flex flex-row justify-content-between align-items-center rounded">
                          <div className="mr-1 mb-2">
                            <img
                              className="rounded"
                              src={import.meta.env.VITE_APP_URL + item.image}
                              width="70"
                            />
                          </div>
                          <div className="d-flex flex-row align-items-center qty">
                            <div>
                              <h6 className="text-dark">Qty: {item.quantity}</h6>
                              {/* <h6 className="text-dark ml_r-2">*</h6> */}
                              <h6 className="text-dark">
                                {" " + CurrencyFormat(item.price)}
                              </h6>
                            </div>
                          </div>
                          <div>
                            <h6 className="text-dark">
                              {CurrencyFormat(item.price * item.quantity)}
                            </h6>
                          </div>
                        </div>
                        <div className="px-2">
                          <h6 className="text-dark">
                            <b>{item.code}</b>
                          </h6>
                          <h6 className="text-dark">{item.title}</h6>
                        </div>
                      </NavLink>
                      <Divider />
                    </div>
                  ))}
                </div>
                <div className="mt-3 bottom_cart product-wap">
                  <div className="">
                    <div className="mt-3 d-flex flex-row justify-content-around p-2">
                      <h5>SubTotal: </h5>
                      <h5>{CurrencyFormat(totalPrice())}</h5>
                    </div>
                    <Divider />
                  </div>
                  <div className="mt-3 p-2 rounded text-center">
                    <Link
                      onClick={toggleDrawer("right", false)}
                      to="shoppingcart"
                      className="text-light btn btn-success-dark ml-2 pay-button"
                      type="button"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p>Your Shopping Cart is Empty!</p>
                <div className="mt-3 p-2 rounded">
                  <NavLink
                    onClick={toggleDrawer("right", false)}
                    to="products"
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
    </Drawer>
    // </Fragment>
  );
}

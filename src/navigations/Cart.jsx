import { useState } from "react";
import "./Cart.css";
// import SideBar from "./sidebar/FromBottom";
import DrawerFromRight from "./sidebar/DrawerFromRight";
import { useSelector } from "react-redux";

const Cart = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const cartProducts = useSelector((state) => state.cart.products);

  return (
    <>
      <div className="nav-icon cart_item position-relative text-decoration-none px-2">
        <i
          className="fa fa-fw fa-cart-arrow-down fa-1x text-init mr-3"
          onClick={toggleDrawer("right", true)}
        // onClick={handleToggleDrawer}
        ></i>
        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-init">
          {cartProducts.length}
        </span>
        <DrawerFromRight
          cartProducts={cartProducts}
          anchor={"right"}
          state={state}
          useState={setState}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </>
  );
};

export default Cart;

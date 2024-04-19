import { useState } from "react";
import "./Cart.css";
import FromBottom from "./sidebar/FromBottom";

function Notifications() {
  const [state, setState] = useState({
    bottom: false,
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

  return (
    <>
      <div className="nav-icon notification_icon position-relative text-decoration-none px-2">
        <i
          className="fa fa-fw fa-bell fa-1x text-light mr-3"
          onClick={toggleDrawer("bottom", true)}
        ></i>
        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-init">
          19
        </span>
        <FromBottom
          anchor={"bottom"}
          state={state}
          useState={setState}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </>
  );
}

export default Notifications;

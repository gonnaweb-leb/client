import { NavLink } from "react-router-dom";
// import {} from 'react-transition-group';
import { CurrencyFormat, Discounted, PriceTTC } from "../hooks/Functions";
import Price from "./price";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import StoreContext from "../hooks/storeContext";
// import WhatsAppButton from "./WhatsAppButton";
// import { Zoom, toast } from 'react-toastify';


const ProductCard = ({
  id,
  isNew,
  subCatId,
  subcatTitle,
  isNew_expiredDate,
  industrial,
  url,
  small_description,
  title,
  code,
  price,
  VAT,
  discount,
  col_md_size,
}) => {
  const dispatch = useDispatch();
  const quantity = 1;
  const { notify } = useContext(StoreContext);
  // let priceTTC = PriceTTC(price, VAT)

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  }, []);

  const message = "Item added successfully!"



  return (
    <div className={`${col_md_size}`}>
      <div className="card mb-3 product-wap rounded-0 cart_item bg-white" key={id}>
        <div className="card rounded-0 card_img">
          {isNew && new Date(isNew_expiredDate) >= new Date() ? (
            <span className="triangle_topright">
              <span className="isNew">new</span>
            </span>
          ) : null}
          {industrial ? <span className="industrial">industrial</span> : null}
          <img
            className="card-img rounded-0 img-fluid"
            src={import.meta.env.VITE_APP_URL + url}
            alt={small_description}
          />
        </div>
        <div className="card-body">
          <ul className="w-100 list-unstyled justify-content-between mb-0">
            <li className="text-dark h5 text-uppercase">
              <b>{code}</b>
            </li>
            <li className="text-muted h6">
              {/* <b>{title?.length >= 20 ? title.slice(0, 20) + " ..." : title}</b> */}
              {/* <h6> */}
              <b>{title}</b>
              {/* </h6> */}
            </li>
            <li className="h6 text-muted">
              {/* <h6> */}
              {small_description?.length >= 30
                ? small_description.slice(0, 20) + " ..."
                : small_description}
              {/* </h6> */}
            </li>
          </ul>
          <div className="text-center price text-danger mt-2">
            {
              discount === "" || discount === null ? CurrencyFormat(price)
                :
                <Price
                  price={PriceTTC(price, VAT)}
                  discount={discount}
                />
            }
          </div>
        </div>
        <div className="">
          <ul className="list-unstyled d-flex justify-content-between items_btn">
            <li>
              <NavLink
                to={`/productdesc?${title}`}
                state={{ id: id, subCatId: subCatId, subcatTitle: subcatTitle, VAT: VAT }}
                className="btn btn-success-dark text-white"
              >
                <i className="far fa-eye"></i>
              </NavLink>
            </li>
            <li>
              <button
                className="btn btn-success-dark text-white"
                name="addtocard"
                value="addtocard"
                onClick={() => {
                  // setShowMessage(true);
                  notify(message);
                  dispatch(
                    addToCart({
                      id: id,
                      code: code,
                      title: title,
                      price: Discounted(PriceTTC(price, VAT), discount),
                      discount: discount,
                      quantity: quantity,
                      image: url,
                    })
                  );
                }}
              >
                <i className="fas fa-cart-plus"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  id: PropTypes.number,
  subCatId: PropTypes.number,
  subcatTitle: PropTypes.string,
  isNew: PropTypes.bool,
  VAT: PropTypes.number,
  // setShowMessage: PropTypes.bool,
  industrial: PropTypes.bool,
  // isNew_expiredDate: PropTypes.instanceOf(Date),
  isNew_expiredDate: PropTypes.string,
  url: PropTypes.string,
  small_description: PropTypes.string,
  code: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  col_md_size: PropTypes.string,
};

export default ProductCard;

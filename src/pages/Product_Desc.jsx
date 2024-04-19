import { NavLink, useLocation } from "react-router-dom";
// import Price from "../components/price";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../hooks/storeContext";
import ReactMarkdown from "react-markdown";
import SliderCards from "../components/SliderCards";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { CurrencyFormat, Discounted, PriceTTC, filterProductsBySubcategoryId } from "../hooks/Functions";
import LeftPanel from "../components/LeftPanel";
import PageLoader from "../components/PageLoader";
import Price from "../components/price";

const Product_Desc = () => {

  const { products, loading, error, settings } = useContext(StoreContext);
  // const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state || {};
  const { subCatId } = location.state || {};
  const { subcatTitle } = location.state || {};
  const { quantityCart } = location.state || {};

  const VAT = settings && settings[0].attributes.generals.vat

  const [quantity, setQuantity] = useState(quantityCart ? quantityCart : 1);

  const dispatch = useDispatch();
  const Product = products.filter((item) => {
    return item.id == id;
  });

  // Reset quantity when the productId changes
  useEffect(() => {
    setQuantity(1);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  }, [id]);

  const relatedProductsFilter = products.filter((item) => {
    return item.id != id;
  });
  const relatedProducts = filterProductsBySubcategoryId(
    relatedProductsFilter,
    subCatId
  );

  const { notify } = useContext(StoreContext);
  const message = "Item added successfully!"
  return (
    <>
      <section id="Product_Desc" className="pt-3 pb-3 bg-white">
        <div className="bg-light container pt-3">
          <div className="row">
            <div className="col-lg-3">
              <div className="">
                <LeftPanel subCatId={subCatId} />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="">
                <section className="">
                  <div className="container pb-3">
                    {
                      error ? (
                        "Something went wrong:--" + error
                      ) : loading ? (
                        <PageLoader />
                      ) : (
                        Product && Product?.map((product) => (
                          <div className="row mb-5" key={product.id}>
                            <div className="col-md-12 mt-2">
                              <h6>
                                {
                                  product.attributes.categories.data[0].attributes.title
                                }
                                {" / "}
                                <NavLink
                                  to="/products"
                                  state={{
                                    catTitle: product.attributes.categories.data[0].attributes.title,
                                    subCatId: subCatId,
                                    subcatTitle: subcatTitle,
                                  }}
                                >
                                  {subcatTitle
                                    ? subcatTitle
                                    : product.attributes.subcategories.data[0].attributes.title
                                  }
                                </NavLink>
                                {" / "}
                                {product.attributes.title}
                              </h6>
                            </div>
                            <div className="col-lg-5 bg-white">
                              <div className="card my-3 product-wap">
                                <img
                                  className="card-img img-fluid"
                                  src={
                                    import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url
                                  }
                                  alt={product.attributes.small_description}
                                  id={product.attributes.image.data.attributes.id}
                                  name={
                                    product.attributes.image.data.attributes.name
                                  }
                                />
                              </div>
                            </div>
                            {/* <!-- col end --> */}
                            <div className="col-lg-7">
                              <div className="card product-wap bg-white">
                                <div className="card-body">
                                  <h5 className="text-uppercase">
                                    <b>{product.attributes.code}</b>
                                  </h5>
                                  <h6 className="">
                                    <b>{product.attributes.title}</b>
                                  </h6>
                                  {product.attributes.industrial ? (
                                    <h6 className="text-init">
                                      <b>industrial</b>
                                    </h6>
                                  ) : null}
                                  <h5 className="price text-danger">
                                    {
                                      product.attributes.discount == "" || product.attributes.discount === null ? CurrencyFormat(product.attributes.price)
                                        :
                                        <Price
                                          price={PriceTTC(product.attributes.price, VAT)}
                                          discount={product.attributes.discount}
                                        />
                                    }
                                  </h5>
                                  <span className="text-muted h6">Brand: </span>
                                  <span>
                                    <b>
                                      {
                                        product.attributes.categories.data[0].attributes.title
                                      }
                                    </b>
                                  </span>
                                  <hr />
                                  <h6 className="text-muted">Description:</h6>
                                  <h6>{product.attributes.small_description}</h6>
                                  <hr />
                                  <h6 className="text-muted">Specification:</h6>
                                  {/* <h6 className="pb-2"> */}
                                  <ReactMarkdown
                                    className="full_description"
                                  >
                                    {product.attributes.full_description}
                                  </ReactMarkdown>
                                  {/* </h6> */}
                                  <hr />
                                  <div className="row">
                                    <div className="col-auto">
                                      <ul className="list-inline pt-2">
                                        <li className="list-inline-item text-right">
                                          Quantity
                                          <h6 className="text-muted">
                                            (Max 5 items)
                                          </h6>
                                        </li>
                                        <li className="list-inline-item">
                                          {/* <button className="btn btn-success-dark btn-sm"> */}
                                          <span
                                            className="btn btn-success-dark"
                                            id="btn-minus"
                                            onClick={() =>
                                              setQuantity((prev) =>
                                                prev == 1 && prev <= quantity
                                                  ? 1
                                                  : prev - 1
                                              )
                                            }
                                          >
                                            -
                                          </span>
                                          {/* </button> */}
                                        </li>
                                        <li className="list-inline-item">
                                          <input
                                            disabled
                                            // defaultValue={quantity}
                                            value={quantity}
                                            name="quantity"
                                            type="text"
                                            className="form-control border-2 quantity"
                                            // placeholder="1"
                                            max={5}
                                            min={1}
                                            pattern="[0-9]*"
                                          />
                                        </li>
                                        <li className="list-inline-item">
                                          <span
                                            className="btn btn-success-dark"
                                            id="btn-plus"
                                            onClick={() =>
                                              setQuantity((prev) =>
                                                prev == 5 && prev <= quantity
                                                  ? 5
                                                  : prev + 1
                                              )
                                            }
                                          >
                                            +
                                          </span>
                                          {/* </button> */}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="row pb-3">
                                    <div className="col d-grid">
                                      <button
                                        // type="submit"
                                        className="btn btn-success-dark"
                                        name="addtocard"
                                        value="addtocard"
                                        // onClick={handleAddItem}
                                        onClick={() => {
                                          notify(message);
                                          dispatch(
                                            addToCart({
                                              id: product.id,
                                              code: product.attributes.code,
                                              title: product.attributes.title,
                                              price: Discounted(
                                                PriceTTC(product.attributes.price, VAT),
                                                product.attributes.discount
                                              ),
                                              quantity: quantity,
                                              image:
                                                product.attributes.image.data
                                                  .attributes.url,
                                            })
                                          );
                                          window.scrollTo(0, 0);
                                          // toggleDrawer("right", true)
                                        }}
                                      >
                                        Add To Cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <section className="py-3 mt-3 bg-white">
                              <div className="container">
                                <div className="row text-left p-2 pb-3">
                                  <h3>Related Products</h3>
                                  <hr />
                                </div>
                                {relatedProducts.length != 0 ? (
                                  <div id="carousel-related-product">
                                    <div className="row">
                                      <SliderCards
                                        relatedProducts={relatedProducts}
                                        productId={product.id}
                                        subCatId={subCatId}
                                        subcatTitle={subcatTitle}
                                        subCategoryId={
                                          product.attributes.subcategories.data[0]
                                            .id
                                        }
                                        VAT={VAT}
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  "No related products founds!"
                                )}
                              </div>
                            </section>
                          </div>
                        ))
                      )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_Desc;

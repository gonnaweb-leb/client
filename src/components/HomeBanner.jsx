import { useContext } from "react";
import { NavLink } from "react-router-dom";
import StoreContext from "../hooks/storeContext";

const HomeBanner = () => {

  const { settings } = useContext(StoreContext);
  const ingco_day = settings && settings[0].attributes.generals.ingco_day

  return (
    <div
      id="hero-carousel"
      className="carousel bg-dark text-light slide mt-3 pb-5 hexagon"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#hero-carousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="3"></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="4"></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="5"></li>
      </ol>

      <div className="carousel-inner">
        {ingco_day ?
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-12 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="../assets/img/offers_slider/ingcoday.webp"
                    alt="Jm Pro System - Joseph Mattar - Ingco Jounieh Store - Dahua Technology"
                  />
                </div>
                <div className="mx-auto col-md-12 col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left text-capitalize">
                    <h1 className="text-init text-shadow">
                      <b>Ingco day....</b> at Jounieh
                    </h1>
                    <h2 className="">
                      sales on selected items!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : null
        }


        <div className={`carousel-item ${!ingco_day ? 'active' : null}`}>
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-12 col-lg-6 order-lg-last">
                <img
                  className="img-fluid"
                  src="../assets/img/offers_slider/slide_1.webp"
                  alt="Jm Pro System - Joseph Mattar - Ingco Jounieh Store - Dahua Technology"
                />
              </div>
              <div className="mx-auto col-md-12 col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left text-capitalize">
                  <h1 className="slider_text text-center text-shadow">
                    we{" "}
                    <span className="text-danger">
                      <b>make</b>
                    </span>{" "}
                    the difference!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-12 col-lg-6 order-lg-last">
                <img
                  className="img-fluid"
                  src="../assets/img/offers_slider/ingco_jounieh_2.webp"
                  alt="Jm Pro System - Joseph Mattar - Ingco Jounieh Store - Dahua Technology"
                />
              </div>
              <div className="mx-auto col-md-12 col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left text-capitalize">
                  <h1 className="text-init text-shadow">
                    <b>Ingco Shop</b> Jounieh
                  </h1>
                  <h2 className="">
                    official distributors
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-12 col-lg-6 order-lg-last">
                <img
                  className="img-fluid"
                  src="../assets/img/offers_slider/ingco_jounieh_3.webp"
                  alt="Jm Pro System - Joseph Mattar - Ingco Jounieh Store - Dahua Technology"
                />
              </div>
              <div className="col-lg-6 col-md-12 mb-0 d-flex align-items-center">
                <div className="text-align-left text-capitalize">
                  <h1 className="text-init text-shadow">Wide products range</h1>
                  <h2 className="">
                    <NavLink
                      to={`/products?ingco`}
                      state={{ catTitle: "ingco", subcatTitle: "All" }}
                      className="text-light btn btn-success-dark ml-2"
                    >
                      Check our products
                    </NavLink>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-12 col-lg-6 order-lg-last">
                <img
                  className="img-fluid"
                  src="../assets/img/offers_slider/dahua_0.webp"
                  alt="Jm Pro System - Joseph Mattar - Ingco Jounieh Store - Dahua Technology"
                />
              </div>
              <div className="col-lg-6 col-md-12 mb-0 d-flex align-items-center">
                <div className="text-align-left text-capitalize">
                  <h1 className="text-init text-shadow">
                    <b>Dahua technology</b>
                  </h1>
                  <h2 className="">
                    authorized dealer
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-12 col-lg-6 order-lg-last">
                <img
                  className="img-fluid"
                  src="../assets/img/offers_slider/dahua_1.webp"
                  alt="Jm Pro System - Joseph Mattar - Ingco Jounieh Store - Dahua Technology"
                />
              </div>
              <div className="col-lg-6 col-md-12 mb-0 d-flex align-items-center">
                <div className="text-align-left text-capitalize">
                  <h1 className="text-init text-shadow">
                    <b>All Dahua technology</b>
                  </h1>
                  <h2 className="">
                    <NavLink
                      to="/products?dahua"
                      state={{ catTitle: "dahua", subcatTitle: "All" }}
                      className="text-light btn btn-success-dark ml-2"
                    >
                      Check our products
                    </NavLink>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i className="fas fa-chevron-left"></i>
      </a>
      <a
        className="carousel-control-next text-decoration-none w-auto pe-3"
        href="#hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default HomeBanner;

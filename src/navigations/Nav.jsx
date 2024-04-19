import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";
// import Notifications from "./Notifications";
import Search from "./Search";
import { useContext } from "react";
import StoreContext from "../hooks/storeContext";
import SocialMedia from "../components/SocialMedia";

export default function Nav() {

  const { settings } = useContext(StoreContext);
  const Company_Name = settings && settings[0].attributes.generals.companyInfo?.company_Name
  const Telephone = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.telephone
  const Email = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.email
  const SocialMediaData = settings && settings[0].attributes.generals?.Social_Media

  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-light bg-light navbar-dark d-none d-lg-block"
        id="nav_top"
      >
        <div className="container text-dark">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>
              <Link
                to="contactus"
                className="navbar-sm-brand text-dark text-decoration-none text-lowercase"
              // href={`mailto:${Email}?body=My custom mail body`}
              >
                {Email}
              </Link>
              <i className="fa fa-phone mx-2"></i>
              <Link
                to="/"
                className="navbar-sm-brand text-dark text-decoration-none"
                href={`tel:${Telephone}`}
              >
                {Telephone}
              </Link>
            </div>
            <div>
              <SocialMedia
                data={SocialMediaData}
                styles="fa-sm me-2"
              />
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar bg-black navbar-expand-lg navbar-light shadow mb-3">
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            to="/"
            className="navbar-brand logo h1 align-self-center px-4"
            reloadDocument={true}
            title={Company_Name}
          >
            <img
              className="img-fluid"
              src="./assets/img/logo.png"
              alt={Company_Name}
            />
          </Link>

          <button
            className="navbar-toggler border-0 bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
            id="main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="aboutus" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/products"
                    className="nav-link"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="contactus" className="nav-link">
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="container justify-content-end align-items-center align-self-center d-flex">
            <Search />
            <Cart />
            {/* <Notifications /> */}
            {/* <Link
              to=""
              className="nav-icon position-relative text-decoration-none px-2"
            >
              <User />
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../hooks/storeContext";
import ReactMarkdown from "react-markdown";
import SocialMedia from "../components/SocialMedia";

function Footer() {

  const { settings } = useContext(StoreContext);

  const Company_Name = settings && settings[0].attributes.generals.companyInfo?.company_Name
  const Address = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.address
  const Telephone = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.telephone
  const Email = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.email
  const SocialMediaData = settings && settings[0].attributes.generals?.Social_Media
  // console.log(SocialMediaData)
  return (
    <footer className="bg-black" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <Link
              to="/"
              className="navbar-brand logo h1 align-self-center px-4"
              href="index.html"
              reloadDocument={true}
            // style={{ color: COLORS.red }}
            >
              <img
                className="img-fluid"
                src="./assets/img/logo.png"
                alt={Company_Name}
                width="200"
              />
              {/* <h3>JM</h3>
            <h4>ProSystem</h4> */}
            </Link>
            {/* <h2 className="text-init border-bottom pb-3 border-light logo">
              Jm Pro System
            </h2> */}
            <ul className="text-init list-unstyled footer-link-list">
              <li>
                <blockquote className="blockquote text-uppercase">
                  <i className="fas fa-map-marker-alt fa-fw"></i>
                  <ReactMarkdown>{Address}</ReactMarkdown>
                </blockquote>
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <Link to="/" className="text-decoration-none">
                  {Telephone}
                </Link>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <Link
                  to="/"
                  className="text-decoration-none text-lowercase"
                  href={`mailto:${Email}`}
                >
                  {Email}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="text-init border-bottom pb-3 border-light">
              Categories
            </h2>
            <ul className="list-unstyled footer-link-list">
              <li>
                <Link
                  to={`/products`}
                  state={{ catName: "ingco" }}
                  className="text-decoration-none"
                >
                  Ingco tools
                </Link>
              </li>
              <li>
                <Link
                  to={`/products`}
                  state={{ catName: "dahua" }}
                  className="text-decoration-none"
                >
                  Dahua Technology
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="text-init border-bottom pb-3 border-light">
              Further Info
            </h2>
            <ul className="list-unstyled footer-link-list">
              <li>
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to="products"
                  className="text-decoration-none"
                >
                  All products
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-decoration-none">
                  Contact us
                </Link>
              </li>
              {/* <li>
                <Link to="/faq" className="text-decoration-none">
                  FAQs
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <SocialMedia
                data={SocialMediaData}
                styles="fa-lg"
              />
            </ul>
          </div>
          <div className="col-auto">
            <label
              className="text-init sr-only"
              htmlFor="subscribeEmail"
            >
              Email address
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="subscribeEmail"
                placeholder="Email address"
              />
              <Link className="text-decoration-none input-group-text btn-success-init border-light">
                Subscribe
              </Link>
              {/* <div className="input-group-text btn-success border-light">
                Subscribe
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-dark">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <h6 className="text-init text-left">
                Copyright &copy; 2024 JM Pro Systems |{" "}
                <span className="">
                  Designed by{" "}
                  <a
                    className=""
                    rel="sponsored"
                    href="https:www.georgesnahra.com"
                  >
                    <img
                      className="img-fluid"
                      src="./assets/img/gonna_web_logo2.jpg"
                      alt="JM ProSystem"
                      width={150}
                    />
                  </a>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

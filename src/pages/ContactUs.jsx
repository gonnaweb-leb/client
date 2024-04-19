import { useNavigate } from "react-router-dom";
import "../css/ContactUs.css";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import GoogleMap from "../components/GoogleMap";
import { useContext } from "react";
import StoreContext from "../hooks/storeContext";
import ReactMarkdown from "react-markdown";

const ContactUs = () => {

  const { settings } = useContext(StoreContext);

  const Company_Name = settings && settings[0].attributes.generals.companyInfo?.company_Name
  const Address = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.address
  const Telephone = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.telephone
  const Email = settings && settings[0].attributes.generals.companyInfo?.FullAddress?.email
  const SocialMediaData = settings && settings[0].attributes.generals?.Social_Media


  // const [message_status, setMessage_status] = useState("");
  const [submitting, setSubmitting] = useState(false);
  window.scrollTo(0, 0);
  const form = useRef();
  const navigate = useNavigate("/products");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const finishSubmit = () => {
    window.scrollTo(0, 0);
    emailjs
      .sendForm(
        "service_wfnf35e",
        "contactus_form",
        form.current,
        "OhhOo_R6DikUo50f0"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          navigate("/products");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (submitting) {
      finishSubmit();
    }
  });

  return (
    <div id="contactus" className="pb-3">
      {submitting ? (
        <span className="success">Successfully submitted ✓</span>
      ) : null}
      <section className="my-3">
        <div className="container">
          <div className="container-fluid">
            <div className="col-md-12 m-auto text-center">
              <h1 className="h1">Contact Us</h1>
              {/* <p>
                We'd love to hear from you - please use the form to send us your
                message or ideas.
              </p> */}
              <hr />
            </div>

          </div>
          <div className="d-flex justify-content-center">
            <GoogleMap />
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container text-dark px-5 mt-3">
          <div className="col-md-12 m-auto text-center">
            <h3 className="mb-3">We look forward to hearing from you!</h3>
            <p>
              Please use the form to send us your
              message or ideas.
            </p>
            <hr />
          </div>

          <div className="row col-md-12 m-auto mt-4 d-flex justify-content-between">
            <div className="col-lg-3 col-md-12 col-sm-12 bg-white address py-3 mb-2">
              <ReactMarkdown>{Address}</ReactMarkdown>
              <div>
                <i className="fa fa-phone fa-fw mx-2"> </i>
                {Telephone}
              </div>
              <div className="text-lowercase">
                <i className="fa fa-envelope mx-2"></i>
                {Email}
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 form bg-white mb-2">
              <form
                ref={form}
                method="post"
                role="form"
                className="py-3"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="form-group col-md-6 mb-3">
                    <label htmlFor="inputname">Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    // onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-6 mb-3">
                    <label htmlFor="inputemail">Email</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    // onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="inputsubject">Subject</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                    onChange={handleInputChange}
                  />
                </div> */}
                <div className="mb-3">
                  <label htmlFor="inputmessage">Message</label>
                  <textarea
                    className="form-control mt-1"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="8"
                    required
                  // onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col text-end">
                    <button type="submit" className="btn btn-success-dark px-3">
                      Let Talk
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

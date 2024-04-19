import "../css/AboutUs.css";

import CameraOutdoorOutlinedIcon from "@mui/icons-material/CameraOutdoorOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import SystemSecurityUpdateWarningOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateWarningOutlined";
import KeyIcon from "@mui/icons-material/Key";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import LightIcon from "@mui/icons-material/Light";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";

const AboutAs = () => {
  window.scrollTo(0, 0);
  return (
    <div id="aboutus">
      <section className="">
        <div className="container">
          <div className="container-fluid">
            <div className="col-md-12 m-auto text-center">
              <h1 className="h1">About Us</h1>
              <p>
                Over many years, JM pro systems have grown to become a
                well-known company on the market field by maintaining excellent
                service, offering technical expertise, providing the best
                products and meeting the challenges of our customers need.
              </p>
            </div>
            <hr />
          </div>

          <div className="row align-items-center">
            <div className="col-md-7 text-dark text-center">
              <div className="text-left">
                <h3 className=""><b>Our core values</b></h3>
                <h4 className="mt-3">
                  <b>Customer Oriented</b>
                  <br />
                  We take customer satisfaction as the driving force for
                  continuous improvement.
                </h4>
                <h4>
                  <b>Integrity</b>
                  <br />
                  Integrity is a core value in our blood not only towards our
                  valued customers but also our partners and our internal
                  co-workers.
                </h4>
                <h4>
                  <b>Professionalism</b>
                  <br />
                  We aim to be a professional partner to our customers, and
                  internal associates.
                </h4>
                <h4>
                  <b>Innovation</b>
                  <br />
                  We keep on investing in R&D to innovate for the greater good.
                </h4>
                <h4>
                  <b>Responsibility</b>
                  <br />
                  We commit to be a responsible one in our society, bringing
                  value to our customers, and taking social responsibility in
                  building a better secured world.
                </h4>
              </div>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="assets/img/aboutus_img.webp"
                alt="JM ProSystem"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Close Banner --> */}

      <section className="my-3 bg-light">
        <div className="container">
          <div className="row text-center text-dark pb-3">
            <div className="col-lg-12 m-auto">
              <h2 className="h2">Our Services</h2>
              <h4>
                Our expert team will be designing the systems, installing it,
                maintain, monitor and provide a training session if needed.
              </h4>
              <hr />
            </div>
          </div>

          <div className="row">
            {/* row1 */}
            <div className="col-md-6 col-lg-3 pb-5 bg-light">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <KeyIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    INTRUSION / ACCESS CONTROL & BARRIERS
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    Access control and intrusion detection is a unified system
                    that allows users to monitor and control physical access to
                    certain areas. This form of protection can extend to physical
                    properties and into cybersecurity.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <CameraOutdoorOutlinedIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">CCTV</h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    Providing crystal clear real-time and recording image with the
                    latest technologies. Like ANPR and Face Recognition work to
                    improve traffic and operational efficiency. Panoramic and
                    thermal cameras also allow for more effective monitoring.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <FireExtinguisherIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    FIRE ALARM / FIRE FIGHTING
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    A fire alarm system is a crucial part of the fire and life
                    safety of a building and its occupants. There are many
                    functions that are served by the fire alarm system.
                    Notification is provided via visible and audible notification
                    appliances.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <LightIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    LIGHTING
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    committed to bringing the world's best light sources to you.
                    Our mission is to help conserve the world's resources
                  </h5>
                </div>
              </div>
            </div>

            {/* row2 */}
            <div className="col-md-6 col-lg-3 pb-5 bg-light">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <SolarPowerIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    SOLAR SYSTEMS
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    Generating power for residential, commercial and industrial
                    usage.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <SurroundSoundIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    SOUND SYSTEMS & VIDEO PHONES
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    Audio, music system and video phones for stores and home use.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <SystemSecurityUpdateWarningOutlinedIcon
                        sx={{ fontSize: 100 }}
                      />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    System Security
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    System security is the practice of protecting information
                    systems from unauthorized access, modification, or
                    destruction. System security measures help organizations
                    protect sensitive data and prevent cyber threats.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="service_card services-icon-wap shadow">
                <div className="py-2">
                  <div className="h1 text-success text-center">
                    <i className="text-dark">
                      <MiscellaneousServicesOutlinedIcon sx={{ fontSize: 100 }} />
                    </i>
                  </div>
                  <h5 className="card_text mt-4 text-center text-dark px-2">
                    24 Hours Service
                  </h5>
                  <h5 className="card_text_overlay text-center text-dark px-2">
                    We take customer satisfaction as the driving force for
                    continuous improvement.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAs;

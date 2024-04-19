import "../css/WhatsAppButton.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = ({ btnClass, url, code, title }) => {
  const phoneNumber = "03750463"; // Replace with your WhatsApp number
  // const productLink = "https://example.com/product";
  // const productLink = { url };
  // const productLink = `code: ${code} - title: ${title}`;

  const openWhatsApp = () => {
    // const message = encodeURIComponent(
    //   `Check out this product: ${productLink}`
    // );
    const message = encodeURIComponent(`I need help, Please!`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    // <button onClick={openWhatsApp} className="whatsapp-button">
    <button
      onClick={openWhatsApp}
      className="whatsapp-button2 btn text-white mt-2"
      // className={`${
      //   btnClass ? "whatsapp-button" : "whatsapp-button2"
      // } btn text-white mt-2`}
    >
      <WhatsAppIcon />
    </button>
  );
};

export default WhatsAppButton;

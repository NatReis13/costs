import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles.css";

function Footer() {
  return (
    <div className="footer1">
      <FaFacebook  className="social"/>
      <FaTwitter className="social" />
      <FaInstagram  className="social"/>

      <p>
        <span className="span">Costs</span> &copy;2022
      </p>
    </div>
  );
}
export default Footer;

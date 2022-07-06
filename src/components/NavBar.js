import { Link } from "react-router-dom";
import "./StyleNavBar.css";
function NavBar() {
  return (
    <div className="nav">
      <div>
        <Link to="/" >Home</Link>
      </div>
      <div>
        <Link to="/Contato">Contato</Link>
      </div>
      <div>
        <Link to="/NewProject">NewProject</Link>
      </div>
      <div>
        <Link to="/Company">Company</Link>
      </div>
    </div>
  );
}
export default NavBar;

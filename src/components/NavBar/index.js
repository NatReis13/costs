import { Link } from "react-router-dom";
import "./styles.css";

import Container from "../layout/Container/Container"
import logo from "../../assest/img/costs_logo.png";

function NavBar() {
  return (
    <nav className="nav">
      <div className="">
        {" "}
        <Link to="/">
          <img src={logo} alt="Costs" />{" "}
        </Link>
      </div>

      <div>
        <div>
          <Link to="/" className="itemStyleLink">
            Home
          </Link>
        </div>

        <div>
          <Link to="/NewProject" className="itemStyleLink">
            Projetos
          </Link>
        </div>

        <div>
          <Link to="/Company" className="itemStyleLink">
            Empresa
          </Link>
        </div>

        <div>
          <Link to="/Contato" className="itemStyleLink">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

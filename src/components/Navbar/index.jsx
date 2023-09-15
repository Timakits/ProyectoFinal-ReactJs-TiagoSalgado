import "./styles.css";
import Logoimg from "./logo";

import { Link } from "react-router-dom";
import CartWidget from "../cartWidget";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Logoimg />
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="navbar-brand" href="#">
            Visual Check✔️
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <h3
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </h3>

              <ul className="dropdown-menu">
                <Link
                  to="/Category/Ray-Ban"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  <li className="dropdown-item">Ray-Ban</li>
                </Link>
                <Link
                  to="/Category/Oakley"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  <li className="dropdown-item">Oakley</li>
                </Link>
                <Link
                  to="/Category/Gucci"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  <li className="dropdown-item">Gucci</li>
                </Link>
                <Link
                  to="/Category/Prada"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  <li className="dropdown-item">Prada</li>
                </Link>
                <Link
                  to="/Category/Versace"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  <li className="dropdown-item">Versace</li>
                </Link>
              </ul>
            </li>
            <Link
              to="/Soporte"
              style={{ textDecoration: "none", color: "white" }}
              className="link"
            >
              <li className="nav-item">Soporte</li>
            </Link>
            <Link
              to="/Contacto"
              style={{ textDecoration: "none", color: "white" }}
              className="link"
            >
              <li className="nav-item">Contacto</li>
            </Link>
            <Link
              to="/Cart"
              style={{ textDecoration: "none", color: "white" }}
              className="link"
            >
              <li className="nav-item">
                <CartWidget />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

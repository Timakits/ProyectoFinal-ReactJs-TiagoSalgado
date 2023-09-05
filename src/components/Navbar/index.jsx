import "./styles.css";
import Logoimg from "./logo";

import { Link } from "react-router-dom";
import CartWidget from "../cartWidget";


function Navbar() {
    return (<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Logoimg />
            <Link to="/" style={{ textDecoration: 'none' }}><a class="navbar-brand" href="#">Visual Check✔️</a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        
                        <ul class="dropdown-menu">
                            <Link to="/Category/Ray-Ban" style={{ textDecoration: 'none' }} className="link"><li className="dropdown-item">Ray-Ban</li></Link>
                            <Link to="/Category/Oakley" style={{ textDecoration: 'none' }} className="link"><li className="dropdown-item">Oakley</li></Link>
                            <Link to="/Category/Gucci" style={{ textDecoration: 'none' }} className="link"><li className="dropdown-item">Gucci</li></Link>
                            <Link to="/Category/Prada" style={{ textDecoration: 'none' }} className="link"><li className="dropdown-item">Prada</li></Link>
                            <Link to="/Category/Versace" style={{ textDecoration: 'none' }} className="link"><li className="dropdown-item">Versace</li></Link>
                        </ul>
                    </li>
                    <Link to="/Soporte" style={{ textDecoration: 'none', color: 'white' }} className="link">
                        <li class="nav-item">
                            Soporte
                        </li>
                    </Link>
                    <Link to="/Contacto" style={{ textDecoration: 'none', color: 'white' }} className="link">
                        <li class="nav-item">
                            Contacto
                        </li>
                    </Link>
                    <Link to="/Cart" style={{ textDecoration: 'none', color: 'white' }} className="link">
                        <li class="nav-item">
                            <CartWidget />
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>);
}



export default Navbar

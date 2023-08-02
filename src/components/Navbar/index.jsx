import "./styles.css";
import Logoimg from "./logo";

var num = 3;



function Navbar() {
    return (<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Logoimg />
            <a class="navbar-brand" href="#">Visual Check ✔️</a>
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
                            <li><a class="dropdown-item" href="#">Anti luz azul</a></li>
                            <li><a class="dropdown-item" href="#">Lentes de sol</a></li>
                            <li><a class="dropdown-item" href="#">Lentes clasicos</a></li>
                            <li><a class="dropdown-item" href="#">Lentes de aviador</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Soporte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}



export default Navbar

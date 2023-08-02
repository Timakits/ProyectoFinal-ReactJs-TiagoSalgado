import "./styles.css"
import len1 from "../../assets/img/len1.jpg"
import len2 from "../../assets/img/len2.jpg"
import len3 from "../../assets/img/len3.jpg"
import len4 from "../../assets/img/len4.jpg"
import len5 from "../../assets/img/len5.jpg"
import len6 from "../../assets/img/len6.jpg"


const Cards = () => {
    return (
        <div>
            <div className="arrow">
                <i class="fa-solid fa-angles-down"></i>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 cardscontainer">
                <div class="col">
                    <div class="card h-100">
                        <img src={len1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col text">
                    <h2>¡Bienvenido a nuestra tienda de lentes, donde el estilo y la visión se unen en una experiencia única!</h2>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col text">
                    <h2>Navegar y comprar en nuestro e -commerce es simple y seguro</h2>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col text">
                    <h2>Ofrecemos promociones y descuentos exclusivos</h2>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={len6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards

function Hero() {

    return (
        <section className="hero">
            <h1 className="hero__title">Librería Mirmoon</h1>
            <h2 className="hero__subtitle">Literatura para leer bajo otra luz</h2>
            <p className="hero__description">Todos los libros disonibles fuero leídos por nosotros.</p>

            <div className="hero__links">
                <a className="hero__link--primary" href="#">Explorar catálogo</a>
                <a className="hero__link--secondary" href="#">Ver novedades</a>                
            </div>
        </section>
    )
}

export default Hero
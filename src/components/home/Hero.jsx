
function Hero() {

    return (
        <section className="hero">
            <h1 className="hero__title">Librería Mirmoon</h1>
            <p className="hero__description">Libros dignos de ser leídos.</p>

            <div className="hero__links">
                <a className="hero__link--primary" href="#">Explorar catálogo</a>
                <a className="hero__link--secondary" href="#">Ver novedades</a>                
            </div>
        </section>
    )
}

export default Hero
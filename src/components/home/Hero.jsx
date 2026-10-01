
function Hero() {

    return (
        <section className="hero">
            <h1 className="hero__title text-4xl">Librería Mirmoon</h1>
            <h2 className="hero__subtitle text-3xl">Literatura para leer bajo otra luz</h2>
            <p className="hero__description text-base">Todos los libros disonibles fuero leídos por nosotros.</p>

            <div className="hero__links">
                <a className="hero__link--primary text-sm" href="#">Explorar catálogo</a>
                <a className="hero__link--secondary text-sm" href="#">Ver novedades</a>                
            </div>
        </section>
    )
}

export default Hero
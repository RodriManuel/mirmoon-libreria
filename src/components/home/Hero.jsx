import { ChevronRight, ChevronDown } from 'lucide-react';

function Hero() {

    return (
        <section className="hero">
            <h1 className="hero__title text-4xl font-bold sm:text-left sm:text-5xl">Librería Miramoon</h1>
            <h2 className="hero__subtitle text-3xl font-bold sm:text-left sm:text-4xl">Literatura para leer bajo otra luz</h2>
            <p className="hero__description text-base font-medium sm:text-left sm:w-90 sm:my-1">Todos los libros disponibles y recomendados fueron leídos por nosotros.</p>

            <div className="hero__links m-auto sm:m-0 sm:my-2">
                <a className="hero__link--primary text-sm flex justify-between" href="#">Explorar catálogo<ChevronRight className='size-5'/></a>
                <a className="hero__link--secondary text-sm flex justify-between" href="#">Recomendados<ChevronRight className='size-5'/></a>                
            </div>
        </section>
    )
}

export default Hero
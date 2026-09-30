import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className="header">
        <a className="header__logo-link" href="#">
            <img className="header__logo" src={logo} alt="Librería Logo" />
        </a>

        <button className="header__toggle" aria-label="Abrir menú">
            <span className="header__bar"></span>
            <span className="header__bar"></span>
            <span className="header__bar"></span>
        </button>

        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__link" href="">Inicio</a></li>
                <li className="nav__item"><a className="nav__link" href="">Catálogo</a></li>
                <li className="nav__item"><a className="nav__link" href="">Carrito</a></li>
                <li className="nav__item"><a className="nav__link" href="">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
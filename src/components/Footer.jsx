import logoFooter from '../assets/logo.png';

function Footer() {
  return (
    <footer className='footer flex flex-col justify-center items-center gap-4'>
        <hr className='w-full border-white my-2' />
        <div className=''>
            <img className='footer__img  w-60' src={logoFooter} alt="" />
        </div>

        <p>&copy; Mirmoon Librería. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
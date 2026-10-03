import Categorias from "../components/home/Categorias"
import Novedades from "../components/home/Novedades"
import Hero from "../components/home/Hero"
import Navbar from "../components/Navbar"

function Inicio() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Novedades></Novedades>
      <Categorias></Categorias>
    </>
  )
}

export default Inicio
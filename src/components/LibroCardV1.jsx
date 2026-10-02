
function LibroCardV1({ libro }) {
    const disponible = libro.stock > 0;

    return (
        <article>
            <button>

            </button>

            <div>
                <img src={libro.imagen} alt="" />
            </div>

            <div>
                <div>
                    {libro.titulo}
                </div>
                <p>
                    {libro.autor}
                </p>
            </div>

            <p>
                ${libro.precio}
            </p>

            <button>
                {disponible ? "Agregar al carrito" : "Sin stock"}
            </button>
        </article>
  )
}

export default LibroCardV1
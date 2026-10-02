
function LibroCardV1({ libro }) {
    const disponible = libro.stock > 0;

    return (
        <article className="card relative flex flex-col rounded-2xl px-6 py-8 shadow-sm transition hover:shadow-md">
            <button className="card__favbtn absolute right-2 top-3 text-4xl leading-none transition text-white">
                ♡
            </button>

            <div className="flex h-67 items-center justify-center">
                <img className="max-h-full max-w-full object-contain shadow-md" src={libro.imagen} alt="" />
            </div>

            <div className="mt-2">
                <h4 className="text-xl font-semibold">
                    {libro.titulo}
                </h4>
                <p className="text-base">
                    {libro.autor}
                </p>
            </div>

            <p className="card__precio mt-1 text-xl font-semibold">
                ${libro.precio.toLocaleString("es-AR")}
            </p>

            <button className={`card__button mt-2 flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm transition ${disponible ? "bg-[#a81b17] text-white" : "bg-gray-400 cursor-not-allowed text-gray-800"}`}>
                {disponible ? "🛒Agregar al carrito" : "Sin stock"}
            </button>
        </article>
  )
}

export default LibroCardV1
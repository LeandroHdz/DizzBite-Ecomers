

const PromoCard = () => {
  return (
    <div className="flex p-2 h-[300px]">
      {/* Imagen en la Izquierda */}
      <div className="lg:w-1/2">
        <img
          src="/test/jakub-kapusnak-Hj53USePB1E-unsplash.jpg"
          alt="Promoción Especial"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
       {/* Contenido a la Derecha */}
    <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-r from-slate-950 to-purple-900 text-white rounded-r-xl">
      <div className="text-4xl font-extrabold mb-2 drop-shadow-md">
        ¡Oferta Exclusiva!
      </div>
      <div className="text-lg mb-6 drop-shadow-md">
        Aprovecha un <span className="font-bold">20% de descuento</span> en toda la tienda. Solo por tiempo limitado.
      </div>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1">
        Comprar Ahora
      </button>
    </div>
    </div>
  )
}

export default PromoCard
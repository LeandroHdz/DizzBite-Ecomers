import React from "react";
import Image from "next/image";

// Definimos los tipos para las props del componente
interface McCardProps {
  title: string;
  description: string;
  src: string;
}

const McCard: React.FC<McCardProps> = ({ title, description, src }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      {/* Imagen - Ahora ocupa más espacio */}
      <div className="flex-shrink-0 w-1/2 h-52 relative mr-6">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="self-start bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md shadow-md transition-transform transform hover:scale-105">
          Comprar Ahora
        </button>
      </div>
    </div>
  );
};

export default McCard;

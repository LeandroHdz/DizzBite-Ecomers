import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import McCard from "../mc/mc-card";

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 2; // Número total de elementos en el carousel (puedes ajustarlo)

  // Cambiar al siguiente item
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Cambiar al item anterior
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8 lg:mx-20  p-6 lg:p-10 ">
      <div className="relative h-[300px] lg:h-[500px] overflow-hidden rounded-lg shadow-md">
        <Carousel>
          <CarouselContent>
            {/* Primer Item del Carousel */}
            <CarouselItem className={currentIndex === 0 ? "block" : "hidden"}>
              <div className="relative w-full h-[300px] lg:h-[500px]">
                <Image
                  src="/test/fruits-and-vegetables-of-brazil-2-1326574.jpg"
                  alt="Fruits and Vegetables"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-lg flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Productos Frescos de Calidad
                  </h2>
                  <p className="text-md text-gray-300 mb-4">
                    Seleccionados cuidadosamente para ofrecerte lo mejor.
                  </p>
                  <button className="self-start bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md shadow-md transition-transform transform hover:scale-105">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </CarouselItem>

            {/* Segundo Item del Carousel */}
            <CarouselItem className={currentIndex === 1 ? "block" : "hidden"}>
              <div className="relative w-full h-[300px] lg:h-[500px]">
                <Image
                  src="/test/salami-1322714.jpg"
                  alt="Exclusive Offers"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-lg flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Disfruta de Ofertas Exclusivas
                  </h2>
                  <p className="text-md text-gray-300 mb-4">
                    Encuentra descuentos en productos seleccionados.
                  </p>
                  <button className="self-start bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md shadow-md transition-transform transform hover:scale-105">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Botón de "Anterior" */}
          <CarouselPrevious
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={goToPrevious} // Asociamos la acción al botón
          >
            &#9664;
          </CarouselPrevious>

          {/* Botón de "Siguiente" */}
          <CarouselNext
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={goToNext} // Asociamos la acción al botón
          >
            &#9654;
          </CarouselNext>
        </Carousel>
      </div>

      {/* Columna derecha: McCards */}
      <div className="flex flex-col justify-center gap-6">
        <McCard
          title="Producto Destacado 1"
          description="Descubre nuestros productos frescos y de calidad, ideales para toda la familia."
          src="/test/fruits-and-vegetables-of-brazil-2-1326574.jpg"
        />
        <McCard
          title="Producto Destacado 2"
          description="Aprovecha nuestras ofertas especiales y lleva a casa lo mejor en alimentos."
          src="/test/fruits-and-vegetables-of-brazil-2-1326574.jpg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

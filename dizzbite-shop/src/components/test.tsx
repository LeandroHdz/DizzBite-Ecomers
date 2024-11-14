import * as React from "react";
import ProductCard from "@/components/Borrar/testBorrar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    image: '/promos/imgTest.png',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10,
  },
  {
    id: 2,
    image: '/promos/imgTest1.png',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10,
    rating: 4,
  },
  {
    id: 3,
    image: '/promos/imgTest2.jpeg',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10,
    rating: 3,
  },
  {
    id: 4,
    image: '/promos/imgTest3.jpg',
    name: 'Samsung Galaxy Buds Pro',
    price: 199,
  },
  {
    id: 5,
    image: '/promos/imgTest4.png',
    name: 'Sony WH-1000XM4 Headphones',
    price: 349,
    discount: 15,
  },
  {
    id: 6,
    image: '/promos/imgTest5.jpg',
    name: 'Fitbit Charge 5',
    price: 179,
  },
];

export function CarouselSize() {
  return (
    <section className="mx-20 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Test</h2>
      <Carousel opts={{ align: "start" }} className="w-full relative">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex w-max space-x-4 pb-5">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    rating={product.rating}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Flechas en la esquina inferior derecha */}
        <div className="absolute  right-5 mt-2 flex space-x-2 ">
          <CarouselPrevious className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 " />
          <CarouselNext className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600" />
        </div>
      </Carousel>
    </section>
  );
}
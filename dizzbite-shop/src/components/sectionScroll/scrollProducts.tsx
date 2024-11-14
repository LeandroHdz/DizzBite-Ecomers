
import ProductCard from "../Borrar/testBorrar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
type Product = {
    id: number;
    image: string;
    name: string;
    price: number;
    discount?: number;
    rating?: number;
};
interface ScrollProductsProps {
    title: string;
    products: Product[]
}
const ScrollProducts: React.FC<ScrollProductsProps> = ({
    title, products
}) => {
    return (
        <section className="mx-5  my-10">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <Carousel opts={{ align: "start" }} className="w-full relative">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex w-max space-x-5 p-5">
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
          <div className="absolute  right-12 mt-2 flex ">
            <CarouselPrevious className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 m-0 " />
            <CarouselNext className="bg-gray-800 text-white rounded-full p-0 hover:bg-gray-600 m-0" />
          </div>
        </Carousel>
      </section>
    )
}
export default ScrollProducts
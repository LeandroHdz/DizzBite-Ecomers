import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "../Borrar/testBorrar";

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
        <div className="m-10">
           <h2 className="text-2xl font-semibold mb-4">{title}</h2>
           <ScrollArea className="w-full whitespace-nowrap ">
           <div className="flex w-max space-x-4 p-4">
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
           <ScrollBar orientation="horizontal" />
           </ScrollArea>
                 
                  
       </div>
    )
}

export default ScrollProducts
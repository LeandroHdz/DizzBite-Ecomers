import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "../Borrar/testBorrar";

const products = [
    {
        image: '/promos/imgTest.png',
        name: 'Apple Watch Series 7 GPS',
        price: 599,
        discount: 10, // 10% de descuento
    },
    {
        image: '/promos/imgTest1.png',
        name: 'Apple Watch Series 7 GPS',
        price: 599,
        discount: 10, // 10% de descuento
        rating:4
    },
    {
        image: '/promos/imgTest2.jpeg',
        name: 'Apple Watch Series 7 GPS',
        price: 599,
        discount: 10, // 10% de descuento
        rating: 3
    },
    
    {
        image: '/promos/imgTest3.jpg',
        name: 'Samsung Galaxy Buds Pro',
        price: 199,
    },
    {
        image: '/promos/imgTest4.png',
        name: 'Sony WH-1000XM4 Headphones',
        price: 349,
        discount: 15, // 15% de descuento
    },
    {
        image: '/promos/imgTest5.jpg',
        name: 'Fitbit Charge 5aasdasasds asd',
        price: 179,
    },
];
const ScrollRecentProducts = () => {
    return (
        <div className="m-10">
           <h2>Productos Recientes</h2>
           <ScrollArea className="w-full whitespace-nowrap ">
           <div className="flex w-max space-x-4 p-4">
           {products.map((product, index) => (
                <ProductCard
                    key={index}
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

export default ScrollRecentProducts
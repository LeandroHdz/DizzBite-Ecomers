"use client"
import { useState } from "react";
import {ShoppingCart} from 'lucide-react'
// En ProductCard
type ProductCardProps = {
    image: string;
    name: string;
    price: number;
    discount?: number;
    rating?: number; // Removido el valor predeterminado aquí
};

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, discount, rating }) => {
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);

    // Convierte price y discount a número en caso de que sean cadenas
    const numericPrice = parseFloat(price);
    const numericDiscount = discount ? parseFloat(discount) : 0;

    // Si discount existe, aplica el descuento
    const finalPrice = numericDiscount ? numericPrice - (numericPrice * numericDiscount) / 100 : numericPrice;

    // Si rating es undefined, usa 0
    const finalRating = rating ?? 0;

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const toggleLike = () => setLiked(!liked);

    return (
        <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center overflow-hidden">
            <a href="#" className="w-full">
                <img className="p-5 rounded-t-lg h-48 object-cover w-full" src={image} alt={`${name} image`} />
            </a>
            <div className="px-5 pb-5 w-full text-center">
                <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                        {name}
                    </h5>
                </a>
                <div className="flex items-center justify-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < finalRating ? 'text-yellow-300' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.973c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" />
                            </svg>
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        {finalRating}.0
                    </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${finalPrice.toFixed(2)}</span>
                    {discount && (
                        <span className="text-sm text-red-500 line-through">${numericPrice.toFixed(2)}</span>
                    )}
                </div>
                <div className="flex items-center justify-center mt-3 space-x-2">
                    <button onClick={decreaseQuantity} className="px-3 py-1 border rounded-lg">-</button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={increaseQuantity} className="px-3 py-1 border rounded-lg">+</button>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-3">
                    <button
                        className="flex items-center justify-center space-x-2 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                        onClick={() => alert(`Agregaste ${quantity} productos al carrito`)}
                    >   
                       <ShoppingCart className="w-5 h-5 " />
                        <span>Añadir</span>
                    </button>
                    <button
                        className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg ${liked ? 'text-red-500' : 'text-gray-500'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                        onClick={toggleLike}
                    >
                        <span>{liked ? '❤️' : '🤍'}</span>
                        <span>Me gusta</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;

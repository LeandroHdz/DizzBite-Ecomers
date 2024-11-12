import { useState, useEffect } from "react";
import { ShoppingCart, User, Search, Phone, Plus } from "lucide-react";

const NavbarDesktop = () => {
    const [showBottomNav, setShowBottomNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Si se está desplazando hacia abajo, ocultar el nav inferior
                setShowBottomNav(false);
            } else {
                // Si se está desplazando hacia arriba, mostrar el nav inferior
                setShowBottomNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Navbar principal siempre visible */}
            <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    {/* Logo y nombre de la tienda */}
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logoAzul.webp" className="h-8" alt="DizzBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DizzBite Shop</span>
                    </a>

                    {/* Barra de búsqueda con icono de lupa */}
                    <div className="relative flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <Search className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                    </div>

                    {/* Iconos de contacto, usuario, cuenta y carrito */}
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">
                            <Phone className="h-6 w-6 text-gray-500 dark:text-gray-300" />
                        </a>
                        <a href="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
                            <User className="h-6 w-6 text-gray-900 dark:text-white" />
                        </a>
                        <a href="/signup" className="text-sm text-green-600 dark:text-green-500 hover:underline">
                            <Plus className="h-6 w-6 text-gray-900 dark:text-white" />
                        </a>
                        <a href="/cart" className="relative p-3.5 pl-0 text-gray-900 dark:text-white hover:underline">
                            <ShoppingCart className="h-6 w-6 text-gray-900 dark:text-white" />
                            <span className="absolute  top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                        </a>
                       
                    </div>
                </div>
            </nav>

            {/* Navbar de navegación secundaria (oculto al hacer scroll) */}
            {showBottomNav && (
                <div className="bg-gray-50 dark:bg-gray-700 transition-all duration-300">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="/products" className="text-gray-900 dark:text-white hover:underline">Productos</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-900 dark:text-white hover:underline">Nosotros</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-900 dark:text-white hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavbarDesktop;

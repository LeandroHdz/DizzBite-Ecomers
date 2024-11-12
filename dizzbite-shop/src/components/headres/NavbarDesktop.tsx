import { ShoppingCart, User, Search, Phone, Plus } from "lucide-react";

const NavbarDesktop = () => {
    return (
        <>
            {/* Navbar principal */}
            <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logoAzul.webp" className="h-8" alt="DizzBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DizzBite Shop</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">
                            <Phone className="h-6 w-6 text-gray-500 dark:text-gray-300" />
                        </a> {/* Icono del teléfono */}
                        <a href="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
                            <User className="h-6 w-6 text-gray-900 dark:text-white" />
                        </a> {/* Icono de login */}
                        <a href="/signup" className="text-sm text-green-600 dark:text-green-500 hover:underline">
                            <Plus className="h-6 w-6 text-gray-900 dark:text-white" />
                        </a> {/* Icono de crear cuenta */}
                        
                    </div>
                </div>
            </nav>

            {/* Navbar de navegación secundaria (Categorías, búsqueda, etc.) */}
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Barra de búsqueda con ícono de lupa */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <Search className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                            </div>
                        </div>

                        {/* Menú de navegación */}
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
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

                        {/* Icono del carrito */}
                        <div className="relative">
                            <a href="/cart" className="text-gray-900 dark:text-white hover:underline">
                                <ShoppingCart className="h-6 w-6 text-gray-900 dark:text-white" />
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span> {/* Cantidad de productos */}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarDesktop;

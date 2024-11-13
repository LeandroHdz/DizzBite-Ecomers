"use client"
import Footer from "@/components/footer";
import HeroSection from "@/components/headres/heroSection";
import NavbarDesktop from "@/components/headres/NavbarDesktop";
import ProductPopulares from "@/components/sectionScroll/productPopulares";
import CatPopulares from "@/components/sectionScroll/catPopulares";
import ScrollProducts from "@/components/sectionScroll/scrollProducts";
import PromoCard from "@/components/mc/promoCard";



const products = [
  {
    id: 1,
    image: '/promos/imgTest.png',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10, // 10% de descuento
  },
  {
    id: 2,
    image: '/promos/imgTest1.png',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10, // 10% de descuento
    rating: 4
  },
  {
    id: 3,
    image: '/promos/imgTest2.jpeg',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10, // 10% de descuento
    rating: 3
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
    discount: 15, // 15% de descuento
  },
  {
    id: 6,
    image: '/promos/imgTest5.jpg',
    name: 'Fitbit Charge 5aasdasasds asd',
    price: 179,
  },
];

const productsRecientes = [
  {
    id: 1,
    image: '/test/recientes/1.webp',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10, // 10% de descuento
  },
  {
    id: 2,
    image: '/test/recientes/2.webp',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10, // 10% de descuento
    rating: 4
  },
  {
    id: 3,
    image: '/test/recientes/3.webp',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    discount: 10, // 10% de descuento
    rating: 3
  },

  {
    id: 4,
    image: '/test/recientes/4.webp',
    name: 'Samsung Galaxy Buds Pro',
    price: 199,
  },
  {
    id: 5,
    image: '/test/recientes/5.webp',
    name: 'Sony WH-1000XM4 Headphones',
    price: 349,
    discount: 15, // 15% de descuento
  },
  {
    id: 6,
    image: '/test/recientes/6.webp',
    name: 'Fitbit Charge 5aasdasasds asd',
    price: 179,
  },
  {
    id: 7,
    image: '/test/recientes/7.webp',
    name: 'Fitbit Charge 5aasdasasds asd',
    price: 2000,
  },
  {
    id: 8,
    image: '/test/recientes/8.webp',
    name: 'Fitbit Charge 5aasdasasds asd',
    price: 111,
  },
  {
    id: 9,
    image: '/test/recientes/9.webp',
    name: 'Fitbit Charge 5aasdasasds asd',
    price: 4000,
  },
];


const dataProductPopulares = [
  {
    id:1,
    src:'/test/populares/1.webp'
  },
  {
    id:2,
    src:'/test/populares/2.webp'
  },
  {
    id:3,
    src:'/test/populares/3.webp'
  },
  {
    id:4,
    src:'/test/populares/4.webp'
  },
  {
    id:5,
    src:'/test/populares/5.webp'
  },
  {
    id:6,
    src:'/test/populares/6.webp'
  },
  {
    id:7,
    src:'/test/populares/7.webp'
  },
  {
    id:8,
    src:'/test/populares/8.webp'
  },
  {
    id:9,
    src:'/test/populares/9.webp'
  },
  
  


]


export default function Home() {
  return (
    <>
      <NavbarDesktop />
      <HeroSection />
      <CatPopulares />
      <ScrollProducts title="Más Vendidos" products={products} />
      <PromoCard img="/test/vecteezy_photorealistic-product-shot-food-photography-ketc_45476337.jpg"
        title='¡Oferta Exclusiva!'
        description='Aprovecha un 20% de descuento en toda la tienda. Solo por tiempo limitado.'
        btnText="Comprar Ahora" />
      <ScrollProducts title="Productos Recientes" products={productsRecientes} />
      <ScrollProducts title="Oferta y Promociones" products={products} />
      <PromoCard img="/test/jakub-kapusnak-Hj53USePB1E-unsplash.jpg"
        title='¡Oferta Exclusiva!'
        description='Aprovecha un 20% de descuento en toda la tienda. Solo por tiempo limitado.'
        btnText="Comprar Ahora" />
      <ProductPopulares title='Productos Populares' data={dataProductPopulares} />
      <ScrollProducts title="Recomendados" products={products} />
      <Footer />
    </>
  );
}

"use client"
import Footer from "@/components/footer";
import HeroSection from "@/components/headres/heroSection";
import NavbarDesktop from "@/components/headres/NavbarDesktop";
import ScrollCard from "@/components/sectionScroll/scrollCard";
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
      id:2,
      image: '/promos/imgTest1.png',
      name: 'Apple Watch Series 7 GPS',
      price: 599,
      discount: 10, // 10% de descuento
      rating:4
  },
  {   
      id:3,
      image: '/promos/imgTest2.jpeg',
      name: 'Apple Watch Series 7 GPS',
      price: 599,
      discount: 10, // 10% de descuento
      rating: 3
  },
  
  { 
      id:4,
      image: '/promos/imgTest3.jpg',
      name: 'Samsung Galaxy Buds Pro',
      price: 199,
  },
  {
      id:5,
      image: '/promos/imgTest4.png',
      name: 'Sony WH-1000XM4 Headphones',
      price: 349,
      discount: 15, // 15% de descuento
  },
  {   
      id:6,
      image: '/promos/imgTest5.jpg',
      name: 'Fitbit Charge 5aasdasasds asd',
      price: 179,
  },
];


export default function Home() {
  return (
      <>
      <NavbarDesktop/>
      <HeroSection/>
      <CatPopulares/>
      <ScrollProducts title="Más Vendidos" products={products}/>
      <PromoCard/>
      <ScrollProducts title="Productos Recientes" products={products}/>
      <ScrollProducts title="Oferta y Promociones" products={products}/>
      <PromoCard/>
      <ScrollCard/> 
      <ScrollProducts title="Recomendados" products={products}/>
      <Footer/>
      </>
  );
}

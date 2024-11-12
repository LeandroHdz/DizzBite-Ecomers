"use client"
import Footer from "@/components/footer";
import HeroSection from "@/components/headres/heroSection";
import NavbarDesktop from "@/components/headres/NavbarDesktop";
import ScrollCard from "@/components/sectionScroll/scrollCard";
import ScrollDepartments from "@/components/sectionScroll/scrollDepartments";
import ScrollRecentProducts from "@/components/sectionScroll/scrollRecentProducts";
import PromoCard from "@/components/mc/promoCard";

export default function Home() {
  return (
      <>
      <NavbarDesktop/>
      <HeroSection/>
      <ScrollDepartments/>
      <ScrollRecentProducts/>
      <PromoCard/>
      <ScrollRecentProducts/>
      <ScrollRecentProducts/>
      <PromoCard/>
      <ScrollCard/> 
      <ScrollRecentProducts/>
      <Footer/>
      </>
  );
}

"use client"
import HeroSection from "@/components/headres/heroSection";
import NavbarDesktop from "@/components/headres/NavbarDesktop";
import ScrollDepartments from "@/components/sectionScroll/scrollDepartments";
import ScrollRecentProducts from "@/components/sectionScroll/scrollRecentProducts";

import Test from "@/components/test";

export default function Home() {
  return (
      <>
      <NavbarDesktop/>
      <HeroSection/>
      {/* <ScrollDepartments/>
      <ScrollRecentProducts/>
      <Test/>
      <ScrollRecentProducts/> */}
      </>
  );
}

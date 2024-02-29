import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import AboutUssection from "@/components/AboutUsSection";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSerction";
import WhyUs from "@/components/WhyUs";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUssection />
      <ServiceSection />
      <WhyUs />
      <Banner />
      <Footer />
    </main>
  );
}

import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSerction";
import WhyUs from "@/components/WhyUs";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUsSection />
      <ServiceSection />
      <WhyUs />
      <Banner />
      <Footer />
    </main>
  );
}

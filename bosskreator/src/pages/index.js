import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceSection from "@/components/ServiceSection";
import WhyUs from "@/components/WhyUs";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <ServiceSection />
      <WhyUs />
      <Banner />
    </main>
  );
}

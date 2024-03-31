import Hero from "@/components/homepage/Hero";
import AboutUsSection from "@/components/homepage/AboutUsSection";
import ServiceSection from "@/components/homepage/ServiceSection";
import WhyUs from "@/components/homepage/WhyUs";
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

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceMarquee from "@/components/ServiceMarquee";
import ServiceStrip from "@/components/ServiceStrip";
import BrandStatement from "@/components/BrandStatement";
import About from "@/components/About";
import Booking from "@/components/Booking";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceMarquee />
        <ServiceStrip />
        <BrandStatement />
        <About />
        <Booking />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}

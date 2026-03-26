import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceMarquee from "@/components/ServiceMarquee";
import About from "@/components/About";
import ServiceStrip from "@/components/ServiceStrip";
import Booking from "@/components/Booking";
import Team from "@/components/Team";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceMarquee />
        <About />
        <ServiceStrip />
        <Booking />
        <Team />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}

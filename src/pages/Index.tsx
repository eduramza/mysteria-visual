import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Process />
      <Testimonials />
      <Offer />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
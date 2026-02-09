import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import TechEdge from "@/components/TechEdge";
import IndustriesServed from "@/components/IndustriesServed";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProductShowcase />
    <TechEdge />
    <IndustriesServed />
    <CTASection />
    <Footer />
  </div>
);

export default Index;

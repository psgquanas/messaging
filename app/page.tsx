import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Stats from "@/components/landing/Stats";
import Features from "@/components/landing/Features";
import Security from "@/components/landing/Security";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Stats />
      <Features />
      <Security />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import AboutDoctor from "@/components/AboutDoctor";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareGuidelines from "@/components/CareGuidelines";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-white selection:bg-[#4F9A8F] selection:text-white">
      <Header />
      <Hero />
      <TrustMarquee />
      <AboutDoctor />
      <TrustStats />
      <Services />
      <WhyChooseUs />
      <CareGuidelines />
      <Testimonials />
      <ContactForm />
      <Footer />
      <CallButton />
    </main>
  );
}

import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import JourneySection from "@/components/landing/JourneySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricelistSection from "@/components/landing/PriceListSection";
import CtaSection from "@/components/landing/CtaSection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <JourneySection />
      <TestimonialsSection />
      <FeaturesSection />
      <PricelistSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <WhatsappButton phoneNumber="6285xxxxxxxxx" message="Hai kak, aku mau ikutan dong.." />
    </div>
  );
};

export default Index;

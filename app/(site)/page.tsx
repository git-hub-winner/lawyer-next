import { AboutSection } from "./components/sections/about/AboutSection";
import { ServicesSection } from "./components/sections/article/ServicesSection";
import ContactsSection from "./components/sections/ContactsSection";
import { HeroSection } from "./components/sections/HeroSection";
import ReviewsSection from "./components/sections/reviews/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactsSection />
    </>
  );
}

import AboutSection from "@components/AboutUs";
import BlogSection from "@components/Blog";
import CategoryList from "@components/CategoryList";
import OfferPage from "@components/CollectionOffer";
import ExploreItem from "@components/Explore";
import HeroSection from "@components/Hero";
import Newsletter from "@components/Sletter";
import SimpleSlider from "@components/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreItem />
      
      <OfferPage />
      
      
      <SimpleSlider />
      
    </main>
  );
}

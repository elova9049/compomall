import Header from './sections/Header';
import HeroSlider from './sections/HeroSlider';
import SearchBar from './sections/SearchBar';
import NewsSection from './sections/NewsSection';
import NewsletterSection from './sections/NewsletterSection';
import TechArticlesSection from './sections/TechArticlesSection';
import ProductInfoSection from './sections/ProductInfoSection';
import SolutionsSection from './sections/SolutionsSection';
import EventsSection from './sections/EventsSection';
import SupportSection from './sections/SupportSection';
import CorporateSection from './sections/CorporateSection';
import SocialShareSection from './sections/SocialShareSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <SearchBar />
        <NewsSection />
        <NewsletterSection />
        <TechArticlesSection />
        <ProductInfoSection />
        <SolutionsSection />
        <EventsSection />
        <SupportSection />
        <CorporateSection />
        <SocialShareSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

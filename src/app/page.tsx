import CategorySection from "./components/CategorySection";
import DeliverySection from "./components/DeliverySection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import TopBanner from "./components/TopBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TopBanner />

      <div className="max-w-7xl">
        <MainSection />
        <DeliverySection />
        <CategorySection />
      </div>

      <Footer />
    </main>
  );
}

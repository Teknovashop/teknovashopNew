import Header from "../components/Header";
import Hero from "../components/Hero";
import CarouselTopSales from "../components/CarouselTopSales";
import RankingList from "../components/RankingList";
import SidebarProducts from "../components/SidebarProducts";
import NewsletterForm from "../components/NewsletterForm";
import NewsSection from "../components/NewsSection";

export const dynamic = "force-dynamic";

export default function Home(){
  return (
    <div>
      <Header />
      <Hero />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <NewsSection />
          <CarouselTopSales />
          <RankingList />
          <NewsletterForm />
        </div>
        <div className="lg:col-span-4">
          <SidebarProducts />
        </div>
      </div>
      <footer className="border-t border-black/5 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-500">
          Divulgación de afiliados: podemos ganar comisión si compras desde nuestros enlaces (sin coste extra para ti).<br/>
          © {new Date().getFullYear()} Teknovashop.
        </div>
      </footer>
    </div>
  );
}

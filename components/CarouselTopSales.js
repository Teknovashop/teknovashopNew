'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../data/products.json";
import ProductCard from "./ProductCard";

export default function CarouselTopSales(){
  const top = products.slice(0,6);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Top ventas</h2>
      <Slider {...settings}>
        {top.map(p => (
          <div key={p.id} className="px-2">
            <ProductCard p={p} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

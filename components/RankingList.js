import products from "../data/products.json";
import ProductCard from "./ProductCard";

function dailyShuffle(arr){
  const seed = new Date().toISOString().slice(0,10).replace(/-/g,'');
  let s = parseInt(seed,10) % 2147483647;
  function rand(){ s = s * 48271 % 2147483647; return (s-1)/2147483646; }
  return [...arr].sort(() => rand() - 0.5);
}

export default function RankingList(){
  const ranked = dailyShuffle(products).slice(0,6);
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ranking dinámico</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ranked.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}

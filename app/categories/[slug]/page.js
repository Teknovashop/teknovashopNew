import products from "../../../data/products.json";
import ProductCard from "../../../components/ProductCard";

export async function generateStaticParams(){
  const cats = Array.from(new Set(products.map(p => p.category)));
  return cats.map(c => ({ slug: c }));
}

export default function CategoryDetail({ params }){
  const { slug } = params;
  const list = products.filter(p => p.category === slug);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold capitalize">Categoría: {slug}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
      {list.length === 0 && <p>No hay productos en esta categoría.</p>}
    </div>
  );
}

import Link from "next/link";
import products from "../data/products.json";

export default function CategoryGrid(){
  const cats = Array.from(new Set(products.map(p => p.category)));
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Categorías destacadas</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {cats.map(c => (
          <Link key={c} href={`/categories/${c}`} className="rounded-2xl bg-white p-6 text-center shadow ring-1 ring-black/5 hover:shadow-md">
            <span className="font-semibold capitalize">{c}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

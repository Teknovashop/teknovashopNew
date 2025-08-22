import products from "../data/products.json";
import Link from "next/link";

export default function SidebarProducts(){
  const picks = products.slice(0,4);
  return (
    <aside className="sticky top-20 flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Ofertas rápidas</h3>
      {picks.map(p => (
        <a key={p.id} href={p.affiliateUrl} target="_blank" rel="nofollow sponsored"
           className="rounded-xl border border-black/5 bg-white p-3 text-sm shadow-sm transition hover:shadow-md">
          <div className="font-medium">{p.name}</div>
          <div className="text-brand">{p.priceText}</div>
        </a>
      ))}
      <Link href="/categories" className="mt-2 text-sm text-brand hover:underline">Ver todas las categorías →</Link>
    </aside>
  );
}

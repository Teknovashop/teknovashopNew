import Image from "next/image";

export default function ProductCard({ p }){
  return (
    <a href={p.affiliateUrl} target="_blank" rel="nofollow sponsored"
       className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:shadow-lg">
      <div className="relative h-48 w-full bg-white">
        <Image src={p.image || "/images/prod1.jpg"} alt={p.name} fill className="object-contain p-4" unoptimized />
        {p.badge && <span className="absolute left-3 top-3 rounded-full bg-black/80 px-2 py-1 text-xs text-white">{p.badge}</span>}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 font-semibold leading-snug">{p.name}</h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-brand">{p.priceText || "Ver precio"}</span>
          <span className="rounded-full bg-brand/10 px-3 py-1 text-xs text-brand">Ver oferta</span>
        </div>
      </div>
    </a>
  );
}

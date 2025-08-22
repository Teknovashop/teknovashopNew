import { getLatestNews } from "../app/lib/news";

export const dynamic = "force-dynamic";

export default async function NewsSection(){
  let news = [];
  try { news = await getLatestNews(8); } catch (e) { news = []; }
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Noticias tecnológicas</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {news.map((n, idx) => (
          <a key={idx} href={n.url} target="_blank" rel="noopener nofollow"
             className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/5 hover:shadow-md">
            <div className="text-sm text-gray-500">{n.source}</div>
            <div className="mt-1 font-semibold">{n.title}</div>
            <div className="mt-1 text-xs text-gray-400">{new Date(n.date).toLocaleString("es-ES")}</div>
          </a>
        ))}
        {news.length === 0 && <p className="text-sm text-gray-500">No hay noticias disponibles ahora mismo.</p>}
      </div>
    </section>
  );
}

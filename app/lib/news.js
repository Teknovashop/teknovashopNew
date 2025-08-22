import Parser from "rss-parser";
const parser = new Parser();

const FEEDS = (process.env.NEWS_FEEDS || "").split(",").map(s => s.trim()).filter(Boolean);

export async function getLatestNews(limit = 10){
  const sources = FEEDS.length ? FEEDS : ["https://www.theverge.com/rss/index.xml"];
  const feeds = await Promise.allSettled(sources.map(u => parser.parseURL(u)));
  const items = [];
  for (const f of feeds){
    if (f.status === "fulfilled"){
      for (const it of f.value.items){
        items.push({
          title: it.title,
          url: it.link,
          date: it.isoDate || it.pubDate || new Date().toISOString(),
          image: (it.enclosure && it.enclosure.url) || null,
          source: f.value.title
        });
      }
    }
  }
  items.sort((a,b) => new Date(b.date) - new Date(a.date));
  return items.slice(0, limit);
}

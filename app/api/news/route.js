import { getLatestNews } from "@/app/lib/news";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(){
  try{
    const items = await getLatestNews(12);
    return Response.json({ items });
  }catch(e){
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), { status: 500 });
  }
}

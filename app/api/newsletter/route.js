export const runtime = "nodejs";
export async function POST(request){
  const body = await request.json().catch(() => ({}));
  const email = body.email || "";
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!valid){
    return new Response(JSON.stringify({ ok:false, message: "Email no válido" }), { status: 400 });
  }
  return Response.json({ ok: true, message: "¡Gracias por suscribirte!" });
}

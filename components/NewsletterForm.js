'use client';
import { useState } from "react";

export default function NewsletterForm(){
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    try{
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setStatus(data.message || (res.ok ? "¡Listo!" : "Error"));
    }catch{
      setStatus("Error de red");
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="rounded-3xl bg-gradient-to-r from-brand/15 to-emerald-200/20 p-6 ring-1 ring-black/5">
        <h2 className="text-2xl font-bold">Recibe alertas de chollos y novedades</h2>
        <p className="mt-1 text-sm text-gray-600">Sin spam. Nos importa tu privacidad.</p>
        <form onSubmit={onSubmit} className="mt-4 flex max-w-xl gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 rounded-xl border border-black/10 bg-white px-3 py-2 outline-none ring-brand/30 focus:ring-2"
          />
          <button className="rounded-xl bg-brand px-4 py-2 font-medium text-white hover:opacity-90">Suscribirme</button>
        </form>
        {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
      </div>
    </section>
  );
}

export default function Hero(){
  return (
    <section className="container-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <p className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20">
          Noticias punteras • Ofertas tech
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
          La tienda <span className="text-brand">tech</span> con noticias y chollos
          <br className="hidden sm:block" />
          actualizados <span className="underline decoration-wavy decoration-brand/70">cada día</span>
        </h1>
        <p className="mt-5 max-w-2xl text-gray-600">
          Información útil y selección curada para comprar mejor: smartwatches, audio, e‑readers y más.
        </p>
      </div>
    </section>
  );
}

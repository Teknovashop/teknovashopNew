export default function Categories() {
            const categories = ["Tecnología", "Hogar", "Belleza", "Deportes"];
            return (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Categorías destacadas</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {categories.map((c, i) => (
                            <div key={i} className="bg-gray-100 p-4 rounded shadow">{c}</div>
                        ))}
                    </div>
                </section>
            );
        }
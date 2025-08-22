export default function Ranking() {
            const topProducts = [
                { id: 1, name: "Producto más vendido 1" },
                { id: 2, name: "Producto más vendido 2" },
            ];
            return (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Ranking de ventas</h2>
                    <ul className="list-disc pl-6">
                        {topProducts.map(p => <li key={p.id}>{p.name}</li>)}
                    </ul>
                </section>
            );
        }
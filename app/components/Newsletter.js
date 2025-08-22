'use client';
        import { useState } from 'react';

        export default function Newsletter() {
            const [email, setEmail] = useState('');
            const handleSubmit = (e) => {
                e.preventDefault();
                alert(`Gracias por suscribirte: ${email}`);
            };
            return (
                <section className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Suscríbete al Newsletter</h2>
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2 rounded flex-1"
                            placeholder="Tu correo electrónico"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded">Suscribirme</button>
                    </form>
                </section>
            );
        }
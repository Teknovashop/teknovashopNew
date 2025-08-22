'use client';
        import { useEffect, useState } from 'react';

        const items = [
            { id: 1, name: "Producto 1", image: "/carousel1.jpg" },
            { id: 2, name: "Producto 2", image: "/carousel2.jpg" },
        ];

        export default function Carousel() {
            const [index, setIndex] = useState(0);
            useEffect(() => {
                const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), 3000);
                return () => clearInterval(timer);
            }, []);

            return (
                <div className="w-full max-w-3xl mx-auto mb-8">
                    <img src={items[index].image} alt={items[index].name} className="w-full rounded shadow" />
                    <p className="text-center mt-2">{items[index].name}</p>
                </div>
            );
        }
'use client';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: 'Producto 1' },
      { id: 2, name: 'Producto 2' },
    ]);
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl mb-4 font-semibold">Top ventas</h2>
      <div className="flex gap-4">
        {products.map(p => (
          <div key={p.id} className="p-4 border rounded">{p.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

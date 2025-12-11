import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/productcards.jsx";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="p-4">Chargement...</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-64 mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="text-xl font-bold mt-4">{product.price} €</p>
    </div>
  );
}

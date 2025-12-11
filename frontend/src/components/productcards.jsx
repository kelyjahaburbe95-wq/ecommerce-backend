export default function ProductCards({ product }) {
  return (
    <div className="p-3 border rounded">
      <img src={product.image} alt={product.name} className="w-full rounded" />
      <h3 className="text-lg">{product.name}</h3>
      <p className="text-gray-500">{product.price} €</p>
    </div>
  );
}

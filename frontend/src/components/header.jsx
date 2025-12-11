import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">
        Boutique
      </Link>

      <Link to="/cart" className="font-semibold">
        Panier
      </Link>
    </header>
  );
}

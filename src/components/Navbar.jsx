import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        MyShop
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link className="hover:text-blue-600 transition" to="/">
          Home
        </Link>

        <Link className="hover:text-blue-600 transition" to="/shop">
          Shop
        </Link>

        <Link className="hover:text-blue-600 transition" to="/cart">
          Cart 🛒
        </Link>

        <Link className="hover:text-blue-600 transition" to="/contact">
          Contact
        </Link>

        <Link
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          to="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">MyShop</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Best online store for quality products at affordable prices.
            Shop with confidence and fast delivery.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/cart" className="hover:text-white">Cart</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

          <p className="text-gray-400 text-sm">
            Email: support@myshop.com
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Phone: +92 300 1234567
          </p>

          {/* SOCIAL ICONS (simple text style) */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>

    </footer>
  );
}
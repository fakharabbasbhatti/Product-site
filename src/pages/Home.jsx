export default function Home() {
  return (
    <div className="p-6">

      {/* HERO SECTION */}
      <div className="bg-blue-600 text-white p-10 rounded-xl text-center">
        <h1 className="text-3xl font-bold">Welcome to MyShop</h1>
        <p className="mt-2">
          Best products at affordable prices
        </p>

        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded font-semibold">
          Shop Now
        </button>
      </div>

      {/* FEATURED TITLE */}
      <h2 className="text-2xl font-bold mt-10">Featured Products</h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-200 rounded"></div>

            <h3 className="mt-3 font-semibold">
              Featured Product {i}
            </h3>

            <p className="text-gray-500 text-sm">
              High quality product with best price
            </p>

            <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              View Product
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
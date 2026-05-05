export default function Shop() {
  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold">Shop Products</h2>

        {/* Search box (UI only for now) */}
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 mt-3 md:mt-0 rounded w-full md:w-64"
        />
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">

        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
          >

            {/* Product Image */}
            <div className="h-32 bg-gray-200 rounded"></div>

            {/* Product Title */}
            <h3 className="mt-3 font-semibold">
              Product {i}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500">
              High quality product for daily use
            </p>

            {/* Price */}
            <p className="font-bold mt-1 text-blue-600">
              $20
            </p>

            {/* Button */}
            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
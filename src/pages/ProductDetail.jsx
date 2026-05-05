export default function ProductDetail() {
  return (
    <div className="p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* PRODUCT IMAGE */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow"></div>

        {/* PRODUCT INFO */}
        <div>

          <h2 className="text-3xl font-bold text-gray-800">
            Product Title
          </h2>

          <p className="text-gray-500 mt-3">
            This is a high quality product description. It explains features,
            quality, and benefits of the product in detail.
          </p>

          {/* PRICE */}
          <p className="text-2xl font-bold text-blue-600 mt-4">
            $99
          </p>

          {/* STOCK STATUS */}
          <p className="text-green-600 mt-1">
            In Stock
          </p>

          {/* QUANTITY (UI ONLY) */}
          <div className="flex items-center gap-3 mt-5">
            <button className="px-3 py-1 border rounded">-</button>
            <span>1</span>
            <button className="px-3 py-1 border rounded">+</button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">

            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>

            <button className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-black transition">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
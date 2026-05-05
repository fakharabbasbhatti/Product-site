export default function Cart() {
  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {/* CART ITEMS */}
      <div className="space-y-4">

        {/* ITEM 1 */}
        <div className="flex items-center justify-between border p-4 rounded shadow-sm">

          {/* PRODUCT INFO */}
          <div>
            <h3 className="font-semibold">Product Name</h3>
            <p className="text-gray-500">$50</p>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-2">
            <button className="px-2 border rounded">-</button>
            <span>1</span>
            <button className="px-2 border rounded">+</button>
          </div>

          {/* REMOVE */}
          <button className="text-red-500 hover:text-red-700">
            Remove
          </button>

        </div>

      </div>

      {/* SUMMARY */}
      <div className="mt-8 border-t pt-6">

        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>$100</span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-5">

          <button className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-black transition">
            Continue Shopping
          </button>

          <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
}
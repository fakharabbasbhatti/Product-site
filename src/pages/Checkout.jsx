export default function Checkout() {
  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {/* FORM */}
      <div className="bg-white shadow p-6 rounded-lg">

        {/* NAME */}
        <input
          className="border p-3 w-full mt-2 rounded"
          placeholder="Full Name"
        />

        {/* PHONE */}
        <input
          className="border p-3 w-full mt-4 rounded"
          placeholder="Phone Number"
        />

        {/* ADDRESS */}
        <input
          className="border p-3 w-full mt-4 rounded"
          placeholder="Full Address"
        />

        {/* CITY */}
        <input
          className="border p-3 w-full mt-4 rounded"
          placeholder="City"
        />

        {/* PAYMENT METHOD (UI ONLY) */}
        <div className="mt-5">
          <p className="font-semibold mb-2">Payment Method</p>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2 mt-2">
            <input type="radio" name="payment" />
            Online Payment
          </label>
        </div>

        {/* ORDER SUMMARY (UI ONLY) */}
        <div className="mt-6 border-t pt-4">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>$100</span>
          </p>

          <p className="flex justify-between mt-2">
            <span>Shipping</span>
            <span>$5</span>
          </p>

          <p className="flex justify-between font-bold mt-3 text-lg">
            <span>Total</span>
            <span>$105</span>
          </p>
        </div>

        {/* BUTTON */}
        <button className="bg-blue-600 text-white w-full py-3 mt-6 rounded hover:bg-blue-700 transition">
          Place Order
        </button>

      </div>
    </div>
  );
}
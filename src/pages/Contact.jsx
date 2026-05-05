export default function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Contact</h2>

      <input className="border p-2 w-full mt-2" placeholder="Email" />
      <textarea className="border p-2 w-full mt-2" placeholder="Message" />

      <button className="bg-green-600 text-white px-4 py-2 mt-3">
        Send
      </button>
    </div>
  );
}
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        {/* EMAIL */}
        <input
          className="border p-3 w-full mt-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email Address"
          type="email"
        />

        {/* PASSWORD */}
        <input
          className="border p-3 w-full mt-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
          type="password"
        />

        {/* FORGOT PASSWORD */}
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* LOGIN BUTTON */}
        <button className="bg-blue-600 text-white w-full py-3 mt-6 rounded hover:bg-blue-700 transition">
          Login
        </button>

        {/* SIGNUP LINK */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}
import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 shadow-lg flex justify-between items-center px-10">
      <div>
        <Link href="/" className="text-2xl font-extrabold hover:text-indigo-400 transition-colors duration-300">
          Blog By Khan
        </Link>
      </div>
      <div className="flex space-x-8">
        <Link
          href="/"
          className="text-lg font-medium hover:text-orange-500 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="text-lg font-medium hover:text-orange-500 transition-colors duration-300"
        >
          Profile
        </Link>
      </div>
      <div className="flex space-x-4">
          <button className="bg-sky-500 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            Logout
          </button>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            Login
          </button>
        </div>
    </nav>
  );
}

import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 shadow-lg rounded-lg flex justify-between items-center px-10">
      <div>
        <Link href="/" className="text-3xl font-extrabold hover:text-indigo-200 transition-colors duration-300">
          Blog By Khan
        </Link>
      </div>
      <div className="flex space-x-8">
        <Link
          href="/"
          className="text-lg font-medium hover:text-indigo-200 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="text-lg font-medium hover:text-indigo-200 transition-colors duration-300"
        >
          Profile
        </Link>
        
        {/* Conditional buttons */}
        <div className="flex space-x-4">
          <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300">
            Logout
          </button>
          <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-xl font-semibold mb-3">Blog Viewer</p>
          <p className="text-sm opacity-70">
            All rights reserved &copy; {new Date().getFullYear()}
          </p>
          <div className="mt-6">
            <a href="#" className="mx-3 text-lg hover:text-indigo-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="mx-3 text-lg hover:text-indigo-300 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="mx-3 text-lg hover:text-indigo-300 transition-colors duration-300">
              Contact
            </a>
          </div>
          <p>Shawonk4@gmail.com</p>
        </div>
      </footer>
    );
  }
  
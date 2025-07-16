const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-6 sm:px-8 md:px-12 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
              Terms & Conditions
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5">
            <a
              href="#"
              className="social-icon bg-gray-800 hover:bg-blue-600 transition-all duration-300 p-3 rounded-full flex items-center justify-center">
              <img src="/assets/github.svg" alt="github" className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert" />
            </a>
            <a
              href="#"
              className="social-icon bg-gray-800 hover:bg-sky-500 transition-all duration-300 p-3 rounded-full flex items-center justify-center">
              <img src="/assets/twitter.svg" alt="twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="social-icon bg-gray-800 hover:bg-pink-600 transition-all duration-300 p-3 rounded-full flex items-center justify-center">
              <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-right">
            © {new Date().getFullYear()} M.Salman Nazeer. All rights reserved.
          </p>
        </div>

        {/* Optional: Additional footer content or divider */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">Built with React & Tailwind CSS</p>
          <p className="text-gray-500 text-xs">Version 1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// FOOTER SECTION  DONE
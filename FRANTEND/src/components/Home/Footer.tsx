import React from 'react';
import { Youtube, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 border-b border-gray-800 dark:border-gray-700">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  YourChannel
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Creating amazing content about technology, tutorials, and entertainment. 
                Join our community of learners and creators!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">About</a></li>
                <li><a href="#videos" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Videos</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Get notified about new videos and content.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-r-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
            <span>© {currentYear} YourChannel. All rights reserved.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
              <ArrowUp className="w-4 h-4 group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
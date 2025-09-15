import React from "react";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  setIsMenuOpen: (isOpen: any) => void;
  isMenuOpen: any;
}

const AchievementPage: React.FC<HeaderProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div >
      {/* Top bar */}
      <div className="p-6">
        <button
          onClick={() => setIsMenuOpen(null)}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>
       
        <div className="grid md:grid-cols-2 gap-12 items-center overflow-hidden p-6">
          {/* Image */}
          <div className="relative ">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-6xl text-gray-500 dark:text-gray-400">
                  <img src={isMenuOpen.link} alt="Profile" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {isMenuOpen.title}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                {isMenuOpen.description}
              </p>
              {/* <p>
                I specialize in <span className="text-purple-600 dark:text-purple-400 font-semibold">technology tutorials</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> coding tips</span>, and 
                <span className="text-pink-600 dark:text-pink-400 font-semibold"> creative content</span> that helps thousands 
                of viewers every month.
              </p> */}
            </div>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-500">
              {/* <div className="flex items-center gap-2">
                <div className="w-4 h-4" />
                <span>Your City, Country</span>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <div className="w-4 h-4" />
                <span>Started in 2021</span>
              </div> */}
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default AchievementPage;

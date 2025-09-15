import React from 'react';
import { Play, Users, Eye, ThumbsUp, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Subscribers', value: '111' },
    { icon: Eye, label: 'Total Views', value: '0' },
    { icon: ThumbsUp, label: 'Likes', value: '0' },
    { icon: Play, label: 'Videos', value: '0' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div> */}
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <Youtube className="w-16 h-16 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          <a href="https://www.youtube.com/@sonudecode">@sonudecode</a>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to my creative universe! I create amazing content about <span className="text-purple-400 font-semibold">technology</span>, 
          <span className="text-pink-400 font-semibold"> tutorials</span>, and <span className="text-blue-400 font-semibold">entertainment</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.youtube.com/@sonudecode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe Now
          </a>
          <a
            href="#videos"
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-lg border border-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Videos
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Hero;
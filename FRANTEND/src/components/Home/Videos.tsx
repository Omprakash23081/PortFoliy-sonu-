import React from 'react';
import { Play, Eye, Calendar, ExternalLink } from 'lucide-react';

const Videos: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: 'Complete React Tutorial for Beginners 2024',
      description: 'Learn React from scratch with this comprehensive tutorial covering all the basics and advanced concepts.',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '152K',
      uploadDate: '2 weeks ago',
      duration: '2:45:30',
      category: 'Tutorial'
    },
    {
      id: 2,
      title: 'Building a Full-Stack App with Next.js',
      description: 'Step-by-step guide to creating a modern web application using Next.js, TypeScript, and Tailwind CSS.',
      thumbnail: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '89K',
      uploadDate: '1 month ago',
      duration: '1:32:15',
      category: 'Project'
    },
    {
      id: 3,
      title: 'JavaScript ES2024 New Features',
      description: 'Explore the latest JavaScript features and how they can improve your code quality and development experience.',
      thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '203K',
      uploadDate: '3 weeks ago',
      duration: '28:45',
      category: 'Update'
    },
    {
      id: 4,
      title: 'CSS Grid vs Flexbox: When to Use What?',
      description: 'Comprehensive comparison between CSS Grid and Flexbox with practical examples and use cases.',
      thumbnail: 'https://images.pexels.com/photos/6424588/pexels-photo-6424588.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '124K',
      uploadDate: '1 week ago',
      duration: '18:22',
      category: 'Tutorial'
    },
    {
      id: 5,
      title: 'My Development Setup & Tools 2024',
      description: 'Complete walkthrough of my coding setup, favorite VS Code extensions, and productivity tools.',
      thumbnail: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      views: '67K',
      uploadDate: '2 months ago',
      duration: '35:12',
      category: 'Lifestyle'
    },
    {
      id: 6,
      title: 'API Design Best Practices',
      description: 'Learn how to design scalable and maintainable APIs with real-world examples and common patterns.',
      thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '95K',
      uploadDate: '3 weeks ago',
      duration: '42:18',
      category: 'Tutorial'
    }
  ];

  const categoryColors = {
    Tutorial: 'from-blue-500 to-blue-600',
    Project: 'from-green-500 to-green-600',
    Update: 'from-yellow-500 to-yellow-600',
    Lifestyle: 'from-purple-500 to-purple-600'
  };

  return (
    <section id="videos" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Videos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This is demo video which is showing below section will update soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>

                {/* Category */}
                <div className={`absolute top-2 left-2 bg-gradient-to-r ${categoryColors[video.category as keyof typeof categoryColors]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <Play className="w-4 h-4" />
                  Watch Video
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@sonudecode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-semibold px-8 py-4 rounded-full hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Videos
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
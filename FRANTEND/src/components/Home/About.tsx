import React from 'react';
import { Calendar, MapPin, Award, Target } from 'lucide-react';
import profileImage from "../image/Sonu Image.jpg"; 
interface HeaderProps {
  setIsMenuOpen: (isOpen: any) => void;
}

const About: React.FC<HeaderProps> = ({ setIsMenuOpen }) => {
  const achievements = [
    {
      icon: Award,
      title: 'Victory Of the Week Award.',
      description: 'For going the extra mile and delivering above and beyond.',
      color: 'from-gray-400 to-gray-600',
      link: "https://res.cloudinary.com/dzyfnnvog/image/upload/v1757964131/x6soqlcci1lrzwrpophe.jpg"
    },
    {
      icon: Award,
      title: 'Spotlight of the Month Award.',
      description: 'For consistently exceeding expectations and delivering high-quality work and outstanding contribution towards project success.',
      color: 'from-purple-400 to-pink-600',
      link : ' https://res.cloudinary.com/dzyfnnvog/image/upload/v1757964303/hu01kuv339650zlkkhnx.jpg'
    },
    {
      icon: Award,
      title: 'GL Eminence Award.',
      description: 'For consistent performance and dedication over the year on the project to achieve project goals.',
      color: 'from-blue-400 to-indigo-600',
      link: 'https://res.cloudinary.com/dzyfnnvog/image/upload/v1757964369/vjimqgwdhxy7wfbhdcwk.jpg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 transform rotate-12 scale-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I am passionate about developing and testing software, providing software services, and creating content to share knowledge with others.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-6xl text-gray-500 dark:text-gray-400">
                  <img src={profileImage} alt="Profile" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Sonu Kumar 
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
I'm Senior Software Engineer at Wipro with 4 years of extensive experience in software development and testing, and I love sharing my insights through engaging content.
              </p>
              <p>
                I specialize in <span className="text-purple-600 dark:text-purple-400 font-semibold">End to end Software development</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> like Web and Mobile new framework Development</span>
                <span className="text-pink-600 dark:text-pink-400 font-semibold"> and also providing automation testing services</span> that helps to ensure high-quality software delivery.
              </p>
              <p>
                I would like to create YouTube content related to technology, news, and other topics. Stay tuned for new updates on my channel <a
                  href='https://www.youtube.com/@sonudecode'
                 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">@sonudecode.</a>. My goal is to inspire and educate while having some short of fun!
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Started in 2021</span>
              </div>
            </div>
          </div>
        </div>
         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse text-center">
            Achievements
        </h1>
        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden "
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setIsMenuOpen(achievement)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-6`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
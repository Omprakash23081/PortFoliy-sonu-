import React from 'react';
import { Code, Palette, Video, Mic, Settings, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Jave & JavaScript', level: 95 },
        { name: 'React & React Native', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'TypeScript & Playwright', level: 88 },
        { name: 'Python', level: 80 }
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 90 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'Canva', level: 95 }
      ]
    },

     {
      title: 'Automation and Framework Architecture',
      icon: Mic,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Mobile & Web Automation', level: 99 },
        { name: 'Framework Design', level: 95 },
        { name: 'API Automation', level: 95 },
        { name: 'Performance & Security', level: 85 },
        { name: 'CI & CD & AWS Cloud', level: 85 }
      ]
    },

    {
      title: 'Content Creation',
      icon: Video,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Video Editing', level: 92 },
        { name: 'Storytelling', level: 88 },
        { name: 'Scriptwriting', level: 85 },
        { name: 'SEO Optimization', level: 80 },
        { name: 'Thumbnail Design', level: 90 }
      ]
    }
   
  ];

  const tools = [
    { name: 'Adobe Premiere Pro', category: 'Video Editing' },
    { name: 'After Effects', category: 'Motion Graphics' },
    { name: 'Figma', category: 'Design' },
    { name: 'VS Code', category: 'Development' },
    { name: 'OBS Studio', category: 'Streaming' },
    { name: 'Audacity', category: 'Audio' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise and creative abilities I use to create amazing content
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Tools & Software
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional tools I use for content creation and development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
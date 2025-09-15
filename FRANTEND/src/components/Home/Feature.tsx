import React from 'react';
import {Users, Briefcase, BookOpen, MessageCircle, Star, Zap, Award, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Briefcase,
      title: 'Development Services',
      description: 'Professional Website development, Mobile apps Development, and custom software solutions for businesses.',
      color: 'from-blue-500 to-cyan-500',
      highlights: ['Website Development', 'Mobile Apps Development', 'Custom Solutions', 'API Integration']
    },
    {
      icon: BookOpen,
      title: 'Framework Architecture Design Services',
      description: 'To develop Framework architecture for automation testing and performance testing using Selenium, Cypress,Typescript,Appium, JMeter etc.',
      color: 'from-green-500 to-emerald-500',
      highlights: ['Selenium & TypeScript and Playwright', 'Appium & ViBium AI', 'Cypress', 'CI & CD Integration']
    },
    {
      icon: Users,
      title: 'Testing Services',
      description: 'Comprehensive testing services to ensure the quality and performance of your applications.',
      color: 'from-purple-500 to-pink-500',
      highlights: ['Automation Testing', 'Manual Testing', 'Performance Testing', 'Ent to end Testing']
    }
   
   
  ];

  const stats = [
    { icon: Star, label: 'Client Rating', value: '4.9/5', color: 'text-yellow-500' },
    { icon: Users, label: 'Happy Clients', value: '20+', color: 'text-blue-500' },
    { icon: Briefcase, label: 'Projects Completed', value: '20+', color: 'text-green-500' },
    { icon: Award, label: 'Years Experience', value: '4+', color: 'text-purple-500' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      content: 'Amazing work on our web application! Professional, timely, and exceeded expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      role: 'Student',
      content: 'The mentoring sessions helped me land my first developer job. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Business Owner',
      content: 'Professional video content that boosted our engagement by 300%. Worth every penny!',
      rating: 5,
      avatar: '👩‍🚀'
    }
  ];

  return (
    <section id="Services" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-pink-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-400 rounded-full animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I offer professional services in Website, Mobile development and Automation architechture and testing. Explore my offerings and find the perfect solution for your needs.
          </p>
        </div>

       
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-gray-200 dark:border-gray-700 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse transform group-hover:scale-110 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
                    {highlight}
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              {/* <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {feature.price}
                </span>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div> */}
            </div>
          ))}
        </div>

         {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-in-up">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-bounce`} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>


        {/* Testimonials */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Clients Say
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              As of now it demo of feedback section. Real testimonials will be added soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with professional quality and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Project
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-full backdrop-blur-lg border border-gray-300 dark:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { BookOpen, Zap, Target, TrendingUp } from 'lucide-react';

const Learning = () => {
  const currentFocus = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'AI & Machine Learning',
      description: 'Exploring TensorFlow.js, OpenAI APIs, and building intelligent applications',
      progress: 75,
      technologies: ['TensorFlow.js', 'OpenAI API', 'Python ML', 'LangChain']
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Web3 & Blockchain',
      description: 'Deep diving into smart contracts, DeFi protocols, and decentralized applications',
      progress: 60,
      technologies: ['Solidity', 'Web3.js', 'DeFi', 'NFTs']
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Performance Optimization',
      description: 'Advanced techniques for high-performance web applications and system design',
      progress: 85,
      technologies: ['WebAssembly', 'Service Workers', 'Edge Computing', 'CDN']
    }
  ];

  const recentLearning = [
    'Completed Advanced React Patterns course',
    'Built microservices with event sourcing',
    'Implemented OAuth 2.0 and OpenID Connect',
    'Explored serverless architecture patterns',
    'Studied system design for scalability'
  ];

  return (
    <section id="learning" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Continuous Learning
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Staying ahead with emerging technologies and deepening expertise in cutting-edge areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center space-x-3">
              <BookOpen className="h-7 w-7 text-blue-600" />
              <span>Current Focus Areas</span>
            </h3>
            
            <div className="space-y-6">
              {currentFocus.map((area, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 mt-1">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {area.title}
                      </h4>
                      <p className="text-slate-600 mb-4">
                        {area.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">Progress</span>
                          <span className="text-sm font-medium text-blue-600">{area.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${area.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white text-slate-600 px-2 py-1 rounded text-sm border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">
              Recent Achievements
            </h3>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <ul className="space-y-4">
                {recentLearning.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-100">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Learning Philosophy
              </h4>
              <p className="text-slate-600 leading-relaxed">
                I believe in continuous learning and staying current with technology trends. 
                My approach combines hands-on experimentation, building real projects, and 
                sharing knowledge with the developer community through mentoring and open source contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
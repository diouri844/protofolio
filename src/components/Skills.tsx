import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS/SCSS']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Progressive Web Apps']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Technologies',
      skills: ['REST APIs', 'WebSockets', 'Microservices', 'OAuth', 'JWT', 'WebRTC']
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Tools & Workflow',
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the full stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { IntrestedArea } from '../utils/types';
import { Zap, Target, TrendingUp } from 'lucide-react';

const currentFocus:IntrestedArea[] = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'DevOps & Deployment Automation',
      description: 'Strengthening CI/CD skills and cloud-native deployment strategies with Docker, GitHub Actions, and AWS services.',
      progress: 80,
      technologies: ['GitHub Actions', 'Docker', 'Jenkins', 'AWS (EC2, S3, Lambda)', 'CI/CD']
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Microservices & Serverless Architectures',
      description: 'Building scalable backend systems with microservice patterns, serverless design, and domain-driven design using Java, Spring, and Node.js.',
      progress: 75,
      technologies: ['Java', 'Spring Boot', 'NestJS', 'Serverless', 'AWS Lambda']
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Software Quality & Engineering Practices',
      description: 'Mastering TDD, robust testing strategies, and code maintainability with TypeScript, Python, and backend testing frameworks.',
      progress: 70,
      technologies: ['TDD', 'Jest', 'TypeScript', 'Python', 'Clean Architecture']
    }
  ];
  
  export default currentFocus;
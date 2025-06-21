
import { Code, Database, Globe, Cloud, Wrench } from 'lucide-react';
import { skillCategory } from './types';

const skillCategories:skillCategory[] = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      skills: [
        'React', 'TypeScript', 'Next.js',
        'Vue.js', 'Tailwind CSS', "Shadcn UI", 
        'CSS', 'JavaScript', "Material UI", "Bootstrap","vite", "react-router", "Chakra UI",
        'Ant Design', "Vutify", "Pinia", "Vuex", "Redux", "Zustand", "axios", "React Query", "TanStack Query"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',"Php laravel / symfony ",
        "Restful APIs", "Express.js", "Fastify", "Django", "Flask", "NestJS", "Prisma", "Sequelize", "TypeORM", "Mongoose",
        "Drizzle ORM", "Supabase", "Firebase", "MySQL", "SQLite", "SQLAlchemy"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', "Jenkins", 'CI/CD', 'Lambda function ', 'Nginx', "amazon RDS/ EC2 / S3/ DynamoDB", 
        "Vercel", "Netlify", " GitHub Actions", "amazon VPC / subnet / Route 53"]
    },
    // {
    //   icon: <Smartphone className="h-8 w-8" />,
    //   title: 'Mobile Development',
    //   skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Progressive Web Apps']
    // },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Technologies',
      skills: ['REST APIs', 'WebSockets', 'Microservices', 'OAuth', 'JWT', 'WebRTC', "authentication/authorization",
        "Cors"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: ' Methodologies & Best Practices',
      skills: ["Test-Driven Development (TDD)" ," Unit/Integration Testing",
         "Agile/Scrum", "Sprint Planning", "Retrospectives", 
        "Jira", 
         "SOLID Principles" , "Design Patterns (Factory, Repository, Observer)",
        "Version Control (Git)", "Continuous Integration", "Continuous Deployment",
         "Clean Code", "Refactoring", "Code Reviews", 
        "Maintainability" ]
    }
  ];

export default skillCategories;

import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Diouri Salah Eddine</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Senior Software Developer passionate about creating innovative solutions 
              and sharing knowledge with the developer community.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/diouri844" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/salah-eddine-diouri-a67402277/" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:SalahEddine1914@outlook.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#learning" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Learning</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>Technical Consulting</li>
              <li>Code Reviews</li>
              <li>Team Mentoring</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © {currentYear} John Developer. All rights reserved.
          </p>
          <p className="text-slate-400 flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
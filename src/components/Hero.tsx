import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import myCV from '../assets/resume.pdf'; 




const Hero:React.FC = () => {
  const handleDownloadResume = (e:React.MouseEvent) => {
    e.preventDefault();
    console.log('Download Resume clicked');    
    // open the resume in a new tab
    window.open(myCV, '_blank', "noopener,noreferrer");
    return ;
  }

  const handleScroolToProjects = (e:React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              DS
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Senior Full-Stack Software Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting elegant solutions and building scalable applications. 
            With expertise in modern web technologies and a commitment to continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
            onClick={handleScroolToProjects}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
            onClick={handleDownloadResume}
            className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/diouri844" 
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/salah-eddine-diouri-a67402277/" 
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:salahiddine.diouri@usmba.ac.ma"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
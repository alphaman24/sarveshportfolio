import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, ExternalLink, Mail, Linkedin } from 'lucide-react';
import NavLink from './components/NavLink';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ExperienceItem from './components/ExperienceItem';
import resume from './components/sarvesh_CV.pdf';
import CardComponent from './components/CardComponent';
import PyramidCardComponent from './components/PyramidCardComponent';
import { Canvas } from '@react-three/fibre';
import { OrbitControls } from '@react-three/drei';
import Earth from '../public/Earth';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      const sections = ['home', 'about', 'experience', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a192f] text-slate-400 min-h-screen font-sans selection:bg-[#233554] selection:text-slate-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-[#64ffda] font-mono text-2xl hover:text-[#64ffda]/80 transition-colors">Sarvesh Portfolio</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about" active={activeSection === 'about'} number="01">About</NavLink>
            <NavLink href="#experience" active={activeSection === 'experience'} number="02">Skills</NavLink>
            <NavLink href="#work" active={activeSection === 'work'} number="03">Work</NavLink>
            <NavLink href="#contact" active={activeSection === 'contact'} number="04">Contact</NavLink>
            <a 
              href={resume} 
              className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded text-sm font-mono hover:bg-[#64ffda]/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#112240]/90 backdrop-blur-md z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className="flex flex-col items-center justify-center h-full space-y-8"
          onClick={e => e.stopPropagation()}
        >
          <NavLink href="#about" onClick={() => setIsMenuOpen(false)} number="01">About</NavLink>
          <NavLink href="#experience" onClick={() => setIsMenuOpen(false)} number="02">Experience</NavLink>
          <NavLink href="#work" onClick={() => setIsMenuOpen(false)} number="03">Work</NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)} number="04">Contact</NavLink>
          <a 
            href={resume} 
            className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded font-mono hover:bg-[#64ffda]/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed left-6 bottom-0 hidden md:block z-10">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-slate-400 after:mt-6">
          <a 
            href="https://github.com/alphaman24" 
            className="text-slate-400 hover:text-[#64ffda] transform hover:-translate-y-1 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sarvesh-r-60013a282/" 
            className="text-slate-400 hover:text-[#64ffda] transform hover:-translate-y-1 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:rrsarvesh8@gmail.com" 
            className="text-slate-400 hover:text-[#64ffda] transform hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Email on right side */}
      <div className="fixed right-6 bottom-0 hidden md:block z-10">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-slate-400 after:mt-6">
          <a 
            href="mailto:rrsarvesh8@gmail.com" 
            className="font-mono text-sm text-slate-400 hover:text-[#64ffda] transform hover:-translate-y-1 transition-all vertical-rl"
            style={{ writingMode: 'vertical-rl' }}
          >
            rrsarvesh8@gmail.com
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-24 pt-32 pb-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <div className="space-y-5 max-w-3xl">
            <p className="font-mono text-[#64ffda] text-sm md:text-base">Hi, I'm Sarvesh</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-200 leading-tight">
              Sarvesh
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 leading-tight">
             I Craft innovative software solution for your Business
            </h2>
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
            I'm a software engineer specializing in building and occasionally designing exceptional digital experiences. 
            Currently, I'm also working on developing cutting-edge Artificial Intelligence and Machine Learning products.
            
            </p>
            <div className="pt-5">
              <a 
                href="#work" 
                className="inline-block border border-[#64ffda] text-[#64ffda] px-7 py-4 rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                Check out my work!
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" number="01" title="About Me">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="leading-relaxed">
              I am a dedicated software developer with expertise in web development with 3D models. My portfolio showcases a variety of freelancing projects where I create dynamic web applications that blend aesthetics with functionality. I also have a strong focus on machine learning and AI engineering, utilizing advanced algorithms to develop intelligent solutions that enhance decision-making and optimize processes
              </p>

              <p className="leading-relaxed">Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Tailwindcss</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>React.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>G-SAP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Three.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>express.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>python opencv</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Tensorflow and many others...</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative z-10 bg-[#64ffda] rounded">
                <img 
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Profile"
                  className="mix-blend-multiply filter grayscale contrast-100 hover:filter-none rounded transition-all"
                />
                <div className="absolute inset-0 bg-[#64ffda]/20 rounded hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" number="02" title="Skill Sets">
          <div className="space-y-12">
            <ExperienceItem 
              title="Full Stack Software Development"
              
            
              points={[
                "Frontend technologies includes react.js, tailwindcss, javascript, typescript",
                "Backend and database management includes node.js, express.js, sql, mongodb, python, django",
                "I create modern Ui and Animation with tailwindcss integrating smooth animations using GSAP and Three.js",
                "I efficiently manage codebases and collaborate in dynamic development teams using git for version control"
              ]}
            />
            <ExperienceItem 
              title="Machine Learning and AI engineering "
              
            
              points={[
                "I develop intelligent models using TensorFlow, Keras and OpenCv for real-world applications.",
                "Experienced in computer vision leveraging dlib, MediaPipe and Opencv to create advanced facial recognition and gesture-tracking systems",
                "Skilled in building and optimizing deep learning models, integrating AI solutions for automation, healthcare, and interactive applications"
              ]}
            />
          </div>
        </Section>

        {/* Work Section */}
        <Section id="work" number="03" title="Projects">
          <div>
            <p className='mb-5 ml-5'>Personal Projects</p>
          <div className="grid md:grid-cols-2 gap-8 cursor-pointer">
            <ProjectCard 
              title="Virtual Control System"
              description="The Virtual Mouse (Machine Learning) project is a gesture-based control system developed using OpenCV, MediaPipe, PyAutoGUI, Keras, and Python. It enables users to navigate and interact with their computer through hand gestures detected by a webcam. This innovative solution enhances accessibility and offers a hands-free computing experience."
              tags={["Opencv", "mediapipe", "pyautogui", "python", "Keras"]}
              image="https://github.com/alphaman24/virtualmouse"
              github="https://github.com/alphaman24/virtualmouse"
              
            />
            <ProjectCard 
              title="Medical Image Analysis"
              description="Medical Image Analysis is a machine learning project that analysis medical images(e.g. X-rays,MRIs,CT scans) to detect abnormalities or diseases, assisting doctors in diagnosis this project is built using opencv, tensorflow, scikit-image, 3d slicer"
              tags={["Opencv", "scikit-image", "TensorFlow","3D slicer"]}
              image="#"
              github="#"
              
            />
          </div>
          </div>


          <div>
            <p className='mb-5 ml-5'>Client Projects</p>
          <div className="grid md:grid-cols-2 gap-8 cursor-pointer">
            <ProjectCard 
              title="Web Application Project"
              description="I built a responsive and dynamic web app for a med company known as carecovehealth using react.js and tailwindcss for the front and node.js and express.js for the backend and i tested the api with postman tool and deployed in godaddy server"
              tags={["React.js", "Tailwindcss", "express.js","node.js","postman api"]}
              image="https://www.carecovehealth.com"
              github="www.carecovehealth.com"
              
            />
            <ProjectCard 
              title="Web Application Project"
              description="I built a responsive and dynamic web app for a tech startup known as quantum pixel solution using react.js and tailwindcss for the front and node.js and express.js for the backend and i tested the api with postman tool and deployed in hostinger server"
              tags={["React.js", "Tailwindcss", "express.js","node.js","postman api"]}
              image="https://quantumpixelsolution.com"
              github="https://quantumpixelsolution.com"
              
            />
          </div>
          </div>



        </Section>




        {/*project card*/ }

      

        {/*project card*/}

             { /*3d*/ }
             <div className='space-y-5'>
             {/* <p className='flex text-cyan-50 text-2xl justify-center'>Fun Time</p>*/}
              <p className='flex text-cyan-50 text-2xl justify-start mt-10'>Try to interact with the 3d models shown below these 3d models were built with Three.js and React Three Fiber technologies</p>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='space-x-3 space-y-3 flex flex-col md:flex-row mt-0'>
            
            <CardComponent />
            <PyramidCardComponent/>
            
            </div>
            </div>
             { /*3d*/ }


        {/* Contact Section */}
        <Section id="contact" number="04" title="Contact">
          <div className="text-center max-w-xl mx-auto space-y-5">
            <h2 className="text-4xl font-bold text-slate-200">Get In Touch</h2>
            <p className="text-lg leading-relaxed">
              Iam eager to collaborate and contribute to innovative projects. Feel free to get in touch!
            </p>
            <div className="pt-8">
              <a 
                href="mailto:rrsarvesh8@gmail.com" 
                className="inline-block border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                Say Hello
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm font-mono">
        <a 
          href="https://github.com/bchiang7/v4" 
          className="text-slate-400 hover:text-[#64ffda] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Built by Sarvesh
        </a>
      </footer>
    </div>
  );
}

export default App;
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import About_details from './About-details';
import Skills from './Skills';


const About = () => {
  return (
    <section id="about" className="p-10  mt-24 flex-col ">
      <div className='flex h-dvh'>
      <div className="hero-left flex-grow">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-7xl">Michael Zatey.</h1>
          <h2 className="text-2xl font-semibold mb-2">Fullstack Developer Web | Mobile</h2>
          <p>From frontend design to backend architecture,<br />I excel in crafting seamless experiences that captivate users on<br />the go.</p>
          <div className="flex mt-4">
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaLinkedin size={24} />
            </a>
            <a href="https://devpost.com/your-devpost-profile" target="_blank" rel="noopener noreferrer">
              <FaDev size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
      <img src="/sit.png" alt="Logo" className="w-250 h-auto" />
      </div>
     
      </div>

      <About_details/>
      <Skills/>
      
    </section>
  );
};

export default About;

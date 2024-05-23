// src/app/page.js
import { getAbout, getProjects, getContact } from '../services/api';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '@/components/Footer';


export default async function Home() {

  let projects = [];


  try {

    projects = await getProjects();

  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className="flex-col align-center p-5 bg-white text-black">
      <Header />
      <About />
   
      <Portfolio projects={projects} />
      <Contact />
      <Footer/>
    </div>
  );
}

// components/Portfolio.js
import Project from './Project';

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="p-10">
      <h2 className="text-2xl font-bold mb-5">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <Project key={project.id} project={project.attributes} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

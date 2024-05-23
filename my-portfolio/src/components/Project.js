// components/Project.js
const Project = ({ project }) => {
  // Debugging: log the project data to see its structure
  console.log('Project data:', project);

  const imageUrl = project.image ? project.image.url : null;

  return (
    <div className="border p-5 rounded">
      {imageUrl ? (
        <img src={imageUrl} alt={project.title} className="w-full h-64 object-cover rounded mb-3" />
      ) : (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded mb-3">
          <span>No image available</span>
        </div>
      )}
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p>{project.description}</p>
      <p>Tech Stack: {project.techStack}</p>
      <a href={project.liveLink} target="_blank" className="text-blue-500">
        Live Site
      </a>
      {' | '}
      <a href={project.repoLink} target="_blank" className="text-blue-500">
        GitHub Repo
      </a>
    </div>
  );
};

export default Project;

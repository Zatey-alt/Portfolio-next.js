// components/Skills.js
const skills = [
    { name: "Python", icon: "/python.png" },
    { name: "Flutter", icon: "/flutter.png" },
    { name: "React Native", icon: "/react.png" },
    { name: "Git Source Control", icon: "/git.png" },
    { name: "Tailwind", icon: "/tailwind.png" },
    { name: "Mongodb", icon: "/mongodb.png" },
    { name: "Html", icon: "/html.png" },
    { name: "JavaScript", icon: "javascript.png" },
    { name: "Flask Microweb Framework", icon: "flask.png" },
    { name: "MySQL", icon: "/mysql.png" },
    { name: "Angular", icon: "/Angular.png" },
    { name: "Typescript", icon: "/typescript.png" },
   
  ];
  
  export default function Skills() {
    return (
      <div className="bg-black-800 text-white p-8">
        <h2 className="text-2xl font-bold mb-4  text-black">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black p-4 flex flex-col items-center justify-center rounded-lg transition transform hover:scale-105 hover:bg-green-800 cursor-pointer"
            >
              <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-4" />
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
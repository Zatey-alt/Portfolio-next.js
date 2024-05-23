// components/Experience.js
const experiences = [
    {
      year: "2021",
      position: "Senior Python Developer",
      company: "Scottech, Toledo",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.`,
    },
    {
      year: "2021",
      position: "Python Developer",
      company: "AutoGrid Systems, Naperville",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.`,
    },
  ];
  
  export default function Experience() {
    return (
      <div className="bg-black text-white p-8">
        <h2 className="text-2xl font-bold mb-8 ">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-center">
                <div className="bg-gray-700 text-white py-2 px-4 rounded-md">
                  {exp.year}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-yellow-500">{exp.position}</h3>
                  <h4 className="text-lg font-medium text-gray-300">{exp.company}</h4>
                </div>
              </div>
              <div className="mt-4 ml-8 pl-4 border-l-4 border-yellow-500">
                <p>{exp.description}</p>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-yellow-500 rounded-full border-2 border-gray-800"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
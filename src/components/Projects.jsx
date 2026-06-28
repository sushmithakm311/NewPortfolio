function Projects() {
  const projectList = [
    { 
      title: "Full-Stack Portfolio", 
      desc: "A personal portfolio website developed using React, Tailwind CSS, and interactive components." 
    },
    { 
      title: "Web Development Internship Project", 
      desc: "A web application built using PHP, MySQL, and modern front-end technologies." 
    }
  ];

  return (
    <div className="bg-black text-white py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
        {projectList.map((proj, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg border border-blue-500 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
function Skills() {
  const skills = ["React", "Node.js", "PHP", "MongoDB", "Tailwind CSS", "JavaScript"];

  return (
    <div className="bg-black text-white py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-800 px-4 py-2 rounded-full border border-blue-500">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
  ];

  return (
    <section id="skills" className="max-w-content mx-auto px-6 md:px-10 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent mb-3">
        What I work with
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-8">
        My Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-card text-ink font-medium px-5 py-2.5 rounded-full shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
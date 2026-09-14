function Experience() {
  const experiences = [
    {
      role: "Associate Software Developer",
      company: "Logicsoft International",
      duration: "July 2026 - Present",
      description:
        "Working on web development projects using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    {
      role: "Software Developer Trainee",
      company: "Logicsoft International",
      duration: "Jan 2026 - June 2026",
      description:
        "Completed a comprehensive training program on web development technologies, including React, Node.js, and MongoDB. Gained hands-on experience in building web applications.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    },
  ];

  return (
    <section id="experience" className="max-w-content mx-auto px-6 md:px-10 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent mb-3">
        Where I've worked
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-10">
        My Experience
      </h2>

      <div className="border-l-2 border-accent/20 pl-8 space-y-12 max-w-2xl">
        {experiences.map((experience) => (
          <div key={experience.role} className="relative">
            <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <h3 className="text-xl font-bold text-ink">{experience.role}</h3>
            <p className="text-accent font-medium mt-1">
              {experience.company} · {experience.duration}
            </p>
            <p className="text-muted mt-3 leading-relaxed">
              {experience.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium bg-card text-ink px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
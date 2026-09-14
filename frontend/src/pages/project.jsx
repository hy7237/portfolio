function Projects() {
  const projects = [
    {
      title: "Uber Clone",
      description:
        "A clone of the Uber app with basic ride-sharing functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/600x400",
      projectUrl: "https://github.com/yourusername/uber-clone",
    },
    {
      title: "HealthCare Appointment Booking System",
      description:
        "A web application for booking medical appointments with a user-friendly interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/600x400",
      projectUrl: "https://github.com/yourusername/healthcare-booking-system",
    },
    {
      title: "Movie Guide Application",
      description:
        "A web application for browsing and searching movies with detailed information.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/600x400",
      projectUrl: "https://github.com/yourusername/movie-guide-app",
    },
  ];

  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent mb-3">
        Selected work
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-10">
        My Projects
      </h2>

      <div id="projects" className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-ink">{project.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-surface text-ink px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-accent font-semibold text-sm"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
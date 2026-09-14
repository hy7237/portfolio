function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 md:px-10 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent mb-3">
        A little about me
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-8">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <p className="text-muted text-lg leading-relaxed">
          Hi, I'm Himanshu. I'm a Full Stack Developer interested in building
          modern and scalable web applications.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          I work with technologies like React, Node.js, Express.js, MongoDB,
          and JavaScript.
        </p>
      </div>
    </section>
  );
}
export default About;
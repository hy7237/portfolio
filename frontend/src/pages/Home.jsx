function Home() {
  return (
    <section
      id="home"
      className="max-w-content mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="text-sm font-semibold tracking-wide text-accent mb-4">
          Welcome to my world
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-ink">
          Hello, I'm <span className="text-accent">Himanshu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-ink mt-2">
          a Software Developer
        </h2>
        <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
          I build modern and responsive websites and web applications using
          the latest technologies. I'm passionate about creating
          user-friendly and visually appealing digital experiences that
          leave a lasting impression.
        </p>
        <button className="mt-8 bg-accent hover:bg-accentDark transition-colors text-white font-semibold px-7 py-3 rounded-full mx-4">
          View Projects
        </button>
        <button className="mt-4 border border-accent text-accent hover:bg-accent hover:text-white transition-colors font-semibold px-7 py-3 rounded-full">
          Download CV
        </button>
      </div>

      <div className="relative">
        <div className="bg-card rounded-3xl aspect-[4/5] flex items-end justify-center overflow-hidden shadow-sm">
          <img
            src="/your-photo.jpg"
            alt="Himanshu"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
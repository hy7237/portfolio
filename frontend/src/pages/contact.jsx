function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-6 md:px-10 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent mb-3">
        Get in touch
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2">
        Contact Me
      </h2>
      <p className="text-muted text-lg mb-10">
        Feel free to reach out to me!
      </p>

      <form className="bg-card rounded-2xl shadow-sm p-8 max-w-xl space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-accent hover:bg-accentDark transition-colors text-white font-semibold px-7 py-3 rounded-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact;
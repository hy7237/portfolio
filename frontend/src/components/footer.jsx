function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-extrabold mb-3">
              Himanshu <span className="text-accent">Yadav</span>
            </h2>

            <p className="text-white/60 leading-relaxed">
              Full Stack Developer passionate about building
              modern and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="#home" className="text-white/60 hover:text-accent transition-colors">
                Home
              </a>

              <a href="#about" className="text-white/60 hover:text-accent transition-colors">
                About
              </a>

              <a href="#skills" className="text-white/60 hover:text-accent transition-colors">
                Skills
              </a>

              <a href="#experience" className="text-white/60 hover:text-accent transition-colors">
                Experience
              </a>

              <a href="#projects" className="text-white/60 hover:text-accent transition-colors">
                Projects
              </a>

              <a
                href="#coding"
                className="text-white/60 hover:text-accent transition-colors"
              >
                Coding Profiles
              </a>

              <a href="#contact" className="text-white/60 hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="YOUR_GITHUB_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                GitHub
              </a>

              <a
                href="YOUR_LINKEDIN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="YOUR_LEETCODE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                LeetCode
              </a>

              <a
                href="mailto:your-email@example.com"
                className="text-white/60 hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Himanshu Yadav. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
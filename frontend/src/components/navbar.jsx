function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Coding", href: "#coding" },
    { label: "Contact", href: "#contact" },
    
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-content mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-ink">
          My <span className="text-accent">Portfolio</span>
        </h2>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
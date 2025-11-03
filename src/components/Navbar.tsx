import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header className="container m-auto sticky top-0 z-50 border-b border-border/10 overflow-x-hidden">
      <div className="container m-auto h-14 flex items-center pr-4 overflow-x-hidden">
        <nav className="ml-auto hidden md:flex items-center space-x-6 pr-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-purple-400"
            >
              {link.name}
            </button>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden text-purple-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-6 space-y-4 animate-fade-in bg-slate-900">
          <button
            onClick={() => scrollToSection("about")}
            className="text-purple-400 block w-full text-left hover:text-primary transition-smooth font-medium py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-purple-400 block w-full text-left hover:text-primary transition-smooth font-medium py-2"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-purple-400 block w-full text-left hover:text-primary transition-smooth font-medium py-2"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-purple-400 block w-full text-left hover:text-primary transition-smooth font-medium py-2"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
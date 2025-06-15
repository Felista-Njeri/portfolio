const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    // { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="container m-auto sticky top-0 z-50 border-b border-border/10 overflow-x-hidden">
      <div className="container m-auto h-14 flex items-center pr-4 overflow-x-hidden">
        <a href="#" className="text-2xl font-bold hidden">FN</a>
        <nav className="ml-auto flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium">
              {link.name}
            </a>
          ))}
          {/* <button className="text-white bg-white">
            <a href="#contact" className="text-white">Contact Me</a>
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
import { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

import Container from "../Common/Container";
import Button from "../Common/Button";

const navItems = [
  { name: "About", id: "about" },
  { name: "Toolkit", id: "toolkit" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h1 className="text-2xl font-black text-blue-600">
                QA<span className="text-slate-900">.</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Resume Button */}
            <div className="hidden lg:block">
              <Button>
                <span className="flex items-center gap-2">
                  Resume
                  <FiDownload />
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-slate-700"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="border-t border-slate-200 px-6 py-4 lg:hidden">

              <div className="flex flex-col gap-4">

                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}

                <Button>
                  <span className="flex items-center justify-center gap-2">
                    Resume
                    <FiDownload />
                  </span>
                </Button>

              </div>

            </div>
          )}

        </div>
      </Container>
    </header>
  );
};

export default Navbar;
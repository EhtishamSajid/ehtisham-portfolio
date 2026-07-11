import { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Container from "../Common/Container";
import Button from "../Common/Button";

const navItems = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">

            <h1 className="text-2xl font-black text-blue-600">
              QA<span className="text-slate-900">.</span>
            </h1>

            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer font-medium text-slate-700 hover:text-blue-600 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button>
                <span className="flex items-center gap-2">
                  Resume
                  <FiDownload />
                </span>
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>

          {menuOpen && (
            <div className="lg:hidden border-t px-6 py-4 space-y-4">

              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block cursor-pointer"
                >
                  {item}
                </Link>
              ))}

              <Button>Resume</Button>

            </div>
          )}

        </div>
      </Container>
    </header>
  );
};

export default Navbar;
import { useState } from "react";
import { Link, scroller } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

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

  const scrollToContact = () => {
    setMenuOpen(false);
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
      offset: -96,
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-3 sm:py-4">
        <div className="rounded-xl border border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-5 lg:px-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h1 className="text-xl font-black text-blue-600 sm:text-2xl">
                QA<span className="text-slate-900">.</span>
              </h1>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-96}
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button onClick={scrollToContact}>
                <span className="flex items-center gap-2">
                  Contact
                  <FiArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-2xl text-slate-700 transition hover:bg-slate-100 lg:hidden"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-slate-200/80 px-4 py-4 lg:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-96}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {item.name}
                  </Link>
                ))}

                <Button onClick={scrollToContact} className="mt-2 w-full">
                  <span className="flex items-center justify-center gap-2">
                    Contact
                    <FiArrowRight className="h-4 w-4" />
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

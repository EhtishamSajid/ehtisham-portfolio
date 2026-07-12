import { useState } from "react";
import { Link, scroller } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";

import Container from "../Common/Container";
import Button from "../Common/Button";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
  { name: "About", id: "about" },
  { name: "Toolkit", id: "toolkit" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const SCROLL_OFFSET = -120;
const RESUME_PATH = "/resume/Ehtisham-Sajid-CV.pdf";
const RESUME_FILENAME = "Ehtisham-Sajid-CV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const themeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";
  const menuId = "primary-navigation-menu";

  const scrollToSection = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: SCROLL_OFFSET,
    });
  };

  const handleLinkKeyDown = (event, target, shouldCloseMenu = false) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    scrollToSection(target);

    if (shouldCloseMenu) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-3 sm:py-4">
        <div className="rounded-xl border border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-200 dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-[0_8px_30px_rgba(0,0,0,0.24)]">
          <nav
            aria-label="Primary navigation"
            className="flex h-16 items-center justify-between gap-3 px-4 sm:px-5 lg:px-6"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={SCROLL_OFFSET}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => handleLinkKeyDown(event, "home")}
              className="min-w-0 cursor-pointer rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <div className="min-w-0 leading-none">
                <p className="truncate text-sm font-black text-slate-950 dark:text-white sm:text-base">
                  Ehtisham Sajid
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Software QA Engineer
                </p>
              </div>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={SCROLL_OFFSET}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(event) => handleLinkKeyDown(event, item.id)}
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={themeLabel}
                aria-pressed={isDark}
                title={themeLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
              >
                {isDark ? (
                  <FiSun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <FiMoon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>

              <Button
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                ariaLabel="Download Ehtisham Sajid CV"
              >
                <span className="flex items-center gap-2">
                  Resume
                  <FiDownload className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls={menuId}
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-2xl text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
            >
              {menuOpen ? (
                <HiOutlineX aria-hidden="true" />
              ) : (
                <HiOutlineMenuAlt3 aria-hidden="true" />
              )}
            </button>
          </nav>

          {menuOpen && (
            <div
              id={menuId}
              className="border-t border-slate-200/80 px-4 py-4 dark:border-slate-800 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={SCROLL_OFFSET}
                    onClick={() => setMenuOpen(false)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(event) =>
                      handleLinkKeyDown(event, item.id, true)
                    }
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={themeLabel}
                  aria-pressed={isDark}
                  className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                >
                  {isDark ? (
                    <FiSun className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <FiMoon className="h-4 w-4" aria-hidden="true" />
                  )}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>

                <Button
                  href={RESUME_PATH}
                  download={RESUME_FILENAME}
                  ariaLabel="Download Ehtisham Sajid CV"
                  className="mt-2 w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    Resume
                    <FiDownload className="h-4 w-4" aria-hidden="true" />
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

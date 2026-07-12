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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-3 sm:py-4">
        <div
          className={`border border-white/70 bg-white/76 shadow-[0_14px_38px_rgba(37,99,235,0.11)] backdrop-blur-2xl transition-all duration-200 dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_18px_48px_rgba(0,0,0,0.3)] ${
            menuOpen ? "rounded-[1.75rem]" : "rounded-full"
          }`}
        >
          <nav
            aria-label="Primary navigation"
            className="relative flex h-14 items-center justify-between gap-3 px-3 sm:px-4 lg:h-[60px] lg:px-5"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={SCROLL_OFFSET}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => handleLinkKeyDown(event, "home")}
              onClick={closeMenu}
              className="min-w-0 cursor-pointer rounded-full px-2 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <div className="flex min-w-0 items-center gap-3 leading-none">
                <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-sm font-black text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] sm:flex">
                  ES
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-slate-950 dark:text-white sm:text-base">
                    Ehtisham Sajid
                  </p>
                  <p className="mt-1 truncate text-xs font-bold text-blue-600 dark:text-sky-300">
                    Software QA Engineer
                  </p>
                </div>
              </div>
            </Link>

            <ul className="hidden items-center gap-1 rounded-full border border-slate-200/60 bg-white/50 p-1 dark:border-white/10 dark:bg-white/[0.045] lg:flex">
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
                    spy={true}
                    activeClass="!bg-blue-600 !text-white shadow-[0_8px_18px_rgba(37,99,235,0.22)] dark:!bg-sky-300 dark:!text-slate-950"
                    className="cursor-pointer rounded-full px-3.5 py-2 text-[13px] font-extrabold text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-950 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white xl:px-4"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/72 text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-sky-300/40 dark:hover:text-sky-200"
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
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/70 bg-blue-600 text-2xl text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-sky-300/40 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200 lg:hidden"
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
              className="border-t border-slate-200/70 px-3 pb-4 pt-3 dark:border-white/10 sm:px-4 lg:hidden"
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
                    spy={true}
                    activeClass="!bg-blue-600 !text-white dark:!bg-sky-300 dark:!text-slate-950"
                    className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-extrabold text-slate-700 transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={themeLabel}
                  aria-pressed={isDark}
                  className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-extrabold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-sky-300/40 dark:hover:text-sky-200"
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

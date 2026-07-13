import { useState } from "react";
import { Link, scroller } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import {
  FiExternalLink,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const navItems = [
  { name: "About", id: "about" },
  { name: "Toolkit", id: "toolkit" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const SCROLL_OFFSET = -110;
const RESUME_PATH = "/resume/Ehtisham-Sajid-CV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuId = "primary-navigation-menu";

  const themeLabel = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  const scrollToSection = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 550,
      offset: SCROLL_OFFSET,
    });
  };

  const handleKeyboardNavigation = (
    event,
    target,
    shouldCloseMenu = false
  ) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    scrollToSection(target);

    if (shouldCloseMenu) {
      setMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="portfolio-navbar">
      <nav
        className={`navbar-shell ${
          menuOpen ? "navbar-shell--open" : ""
        }`}
        aria-label="Primary navigation"
      >
        <div className="navbar-main">
          <Link
            to="home"
            smooth
            duration={550}
            offset={SCROLL_OFFSET}
            role="link"
            tabIndex={0}
            onClick={closeMenu}
            onKeyDown={(event) =>
              handleKeyboardNavigation(event, "home")
            }
            className="navbar-brand"
            aria-label="Go to the top of the portfolio"
          >
            <span className="navbar-logo" aria-hidden="true">
              ES
            </span>

            <span className="navbar-brand-copy">
              <span className="navbar-brand-name">
                Ehtisham Sajid
              </span>

              <span className="navbar-brand-role">
                Software QA Engineer
              </span>
            </span>
          </Link>

          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  spy
                  duration={550}
                  offset={SCROLL_OFFSET}
                  role="link"
                  tabIndex={0}
                  activeClass="navbar-link-active"
                  onKeyDown={(event) =>
                    handleKeyboardNavigation(
                      event,
                      item.id
                    )
                  }
                  className="navbar-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              aria-pressed={isDark}
              title={themeLabel}
              className="navbar-theme-button"
            >
              {isDark ? (
                <FiSun aria-hidden="true" />
              ) : (
                <FiMoon aria-hidden="true" />
              )}
            </button>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-button"
              aria-label="Open Ehtisham Sajid resume in a new tab"
            >
              <span className="navbar-resume-text">
                Resume
              </span>

              <FiExternalLink aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls={menuId}
              className="navbar-menu-button"
            >
              {menuOpen ? (
                <HiOutlineX aria-hidden="true" />
              ) : (
                <HiOutlineMenuAlt3 aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={`navbar-mobile-menu ${
            menuOpen
              ? "navbar-mobile-menu--visible"
              : ""
          }`}
        >
          <div className="navbar-mobile-links">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                spy
                duration={550}
                offset={SCROLL_OFFSET}
                role="link"
                tabIndex={menuOpen ? 0 : -1}
                activeClass="navbar-mobile-link-active"
                onClick={closeMenu}
                onKeyDown={(event) =>
                  handleKeyboardNavigation(
                    event,
                    item.id,
                    true
                  )
                }
                className="navbar-mobile-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
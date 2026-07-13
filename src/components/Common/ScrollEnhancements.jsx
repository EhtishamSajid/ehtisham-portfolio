import { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import "./ScrollEnhancements.css";

const ScrollEnhancements = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const glowRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0
          ? (window.scrollY / documentHeight) * 100
          : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 100));
      setShowBackToTop(window.scrollY > 650);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return undefined;
    }

    const supportsFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!supportsFinePointer.matches) {
      return undefined;
    }

    let animationFrame = null;

    const handlePointerMove = (event) => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        glow.style.setProperty("--cursor-x", `${event.clientX}px`);
        glow.style.setProperty("--cursor-y", `${event.clientY}px`);
        glow.classList.add("cursor-glow--visible");
      });
    };

    const handlePointerLeave = () => {
      glow.classList.remove("cursor-glow--visible");
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave
    );

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="scroll-progress"
        aria-hidden="true"
      >
        <span
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
          }}
        />
      </div>

      <div
        ref={glowRef}
        className="cursor-glow"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={scrollToTop}
        className={`back-to-top ${
          showBackToTop
            ? "back-to-top--visible"
            : ""
        }`}
        aria-label="Back to the top of the page"
        title="Back to top"
      >
        <FiArrowUp aria-hidden="true" />

        <span className="back-to-top-ring" aria-hidden="true">
          <svg viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="20"
              pathLength="100"
            />

            <circle
              className="back-to-top-ring-progress"
              cx="22"
              cy="22"
              r="20"
              pathLength="100"
              style={{
                strokeDashoffset: 100 - scrollProgress,
              }}
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default ScrollEnhancements;
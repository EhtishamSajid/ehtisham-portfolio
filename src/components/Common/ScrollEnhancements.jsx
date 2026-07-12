import { useCallback } from "react";

import { useScrollProgress } from "../../hooks/useScrollProgress";
import BackToTopButton from "./BackToTopButton";
import ScrollProgressBar from "./ScrollProgressBar";

const BACK_TO_TOP_OFFSET = 360;

const ScrollEnhancements = () => {
  const { progress, scrollY } = useScrollProgress();

  const handleBackToTop = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <>
      <ScrollProgressBar progress={progress} />
      <BackToTopButton
        visible={scrollY > BACK_TO_TOP_OFFSET}
        onClick={handleBackToTop}
      />
    </>
  );
};

export default ScrollEnhancements;

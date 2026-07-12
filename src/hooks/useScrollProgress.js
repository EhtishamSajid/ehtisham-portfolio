import { useEffect, useState } from "react";

const getScrollSnapshot = () => {
  if (typeof window === "undefined") {
    return { progress: 0, scrollY: 0 };
  }

  const { documentElement, body } = document;
  const scrollY = window.scrollY || documentElement.scrollTop || 0;
  const scrollHeight = Math.max(
    documentElement.scrollHeight,
    body.scrollHeight
  );
  const scrollableHeight = Math.max(scrollHeight - window.innerHeight, 0);
  const progress =
    scrollableHeight > 0 ? Math.min(scrollY / scrollableHeight, 1) : 0;

  return { progress, scrollY };
};

export const useScrollProgress = () => {
  const [scrollState, setScrollState] = useState(getScrollSnapshot);

  useEffect(() => {
    let frameId = null;

    const updateScrollState = () => {
      frameId = null;

      setScrollState((currentState) => {
        const nextState = getScrollSnapshot();
        const progressChanged =
          Math.abs(nextState.progress - currentState.progress) > 0.001;
        const scrollChanged =
          Math.abs(nextState.scrollY - currentState.scrollY) > 1;

        return progressChanged || scrollChanged ? nextState : currentState;
      });
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollState);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return scrollState;
};

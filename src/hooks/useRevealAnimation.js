import { useEffect } from "react";

// Animasi reveal untuk elemen dengan atribut data-reveal
export function useRevealAnimation(route) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("is-visible", entry.isIntersecting),
        );
      },
      { threshold: 0.16 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [route]);
}

export default useRevealAnimation;

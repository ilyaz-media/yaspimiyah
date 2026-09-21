import { useEffect, useState } from "react";

const LOADING_DELAY = 2000;

export function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash);
  const [loading, setLoading] = useState(true);

  // Loading awal
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DELAY);
    return () => clearTimeout(timer);
  }, []);

  // Navigasi hash -> tampilkan loading, lalu ganti route
  useEffect(() => {
    const handleRoute = () => {
      setLoading(true);

      const hash = window.location.hash;

      setTimeout(() => {
        setRoute(hash);
        setLoading(false);
      }, LOADING_DELAY);
    };

    window.addEventListener("hashchange", handleRoute);

    return () => {
      window.removeEventListener("hashchange", handleRoute);
    };
  }, []);

  return { route, loading };
}

// Scroll ke atas saat pindah halaman (beranda atau halaman unit)
export function useScrollToTop(route) {
  useEffect(() => {
    if (route === "" || route === "#beranda" || route.startsWith("#unit/")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [route]);
}

export default useHashRoute;

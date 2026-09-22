import { useHashRoute, useScrollToTop } from "./hooks/useHashRoute";
import { useRevealAnimation } from "./hooks/useRevealAnimation";
import { units } from "./data/units";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageLoader from "./components/common/PageLoader";
import HomePage from "./pages/HomePage";
import UnitPage from "./pages/UnitPage";
import GaleriPage from "./pages/GaleriPage";

export default function App() {
  const { route, loading } = useHashRoute();
  const unit = units.find((item) => route === `#unit/${item.slug}`);
  const isGaleriPage = route === "#galeri-lengkap";

  useScrollToTop(route);
  useRevealAnimation(route);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcf9] text-slate-700">
      {loading && <PageLoader />}
      <Header />

      <main>
        {unit ? (
          <UnitPage unit={unit} />
        ) : isGaleriPage ? (
          <GaleriPage />
        ) : (
          <HomePage />
        )}
      </main>

      <Footer />
    </div>
  );
}

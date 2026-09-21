import HeroSection from "../components/sections/home/HeroSection";
import TentangSection from "../components/sections/home/TentangSection";
import UnitSection from "../components/sections/home/UnitSection";
import NilaiSection from "../components/sections/home/NilaiSection";
import GaleriSection from "../components/sections/home/GaleriSection";
import KontakSection from "../components/sections/home/KontakSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TentangSection />
      <UnitSection />
      <NilaiSection />
      <GaleriSection />
      <KontakSection />
    </>
  );
}

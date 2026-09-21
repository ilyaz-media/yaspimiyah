import UnitHero from "../components/sections/unit/UnitHero";
import UnitTentang from "../components/sections/unit/UnitTentang";
import UnitGaleri from "../components/sections/unit/UnitGaleri";
import UnitCta from "../components/sections/unit/UnitCta";

export default function UnitPage({ unit }) {
  return (
    <>
      <UnitHero unit={unit} />
      <UnitTentang unit={unit} />
      <UnitGaleri unit={unit} />
      <UnitCta unit={unit} />
    </>
  );
}

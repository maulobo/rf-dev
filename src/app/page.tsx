import HomeHero from "./components/home-hero";
import "./page.scss";
import Superposition from "./components/superposition";
import Unidades from "./components/unidades";

export default function Home() {
  return (
    <div className="full-body-container">
      <HomeHero />
      <Unidades />
      <Superposition />
    </div>
  );
}

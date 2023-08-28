import { Route, Routes, Navigation } from "react-router-dom";
import Hero from "./components/Hero";
import TourSelect from "./components/TourSelect";
import Popular from "./components/Popular";
import Support from "./components/Support";

function App() {
  return (
    <div>
      <Hero />
      <TourSelect />
      <Popular />
      <Support />
    </div>
  );
}

export default App;

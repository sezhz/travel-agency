import { Route, Routes, Navigation } from "react-router-dom";
import Hero from "./components/Hero";
import TourSelect from "./components/TourSelect";
import Popular from "./components/Popular";

function App() {
  return (
    <div>
      <Hero />
      <TourSelect />
      <Popular />
    </div>
  );
}

export default App;

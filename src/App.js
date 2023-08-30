import { Route, Routes, Navigation } from "react-router-dom";
import Hero from "./components/Hero";
import TourSelect from "./components/TourSelect";
import Popular from "./components/Popular";
import Support from "./components/Support";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TourSelect />
      <Popular />
      <Support />
    </div>
  );
}

export default App;

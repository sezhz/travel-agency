import { Route, Routes, Navigation } from "react-router-dom";
import Hero from "./components/Hero";
import TourSelect from "./components/TourSelect";
import Popular from "./components/Popular";
import Support from "./components/Support";
import Header from "./components/Header";
import About from "./components/About";
import Reviews from "./components/Reviews";
import News from "./components/News";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TourSelect />
      <Popular />
      <Support />
      <About />
      <Reviews />
      <News />
    </div>
  );
}

export default App;

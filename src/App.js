import { Route, Routes, Navigation } from "react-router-dom";
import Hero from "./components/Hero";
import TourSelect from "./components/TourSelect";

function App() {
  return (
    <div>
      <Hero />
      <TourSelect />
    </div>
  );
}

export default App;

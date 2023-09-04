import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Support from "./components/Support";
import Header from "./components/Header";
import About from "./components/About";
import Reviews from "./components/Reviews";
import News from "./components/News";
import Footer from "./components/Footer";
import Country from "./components/Country";
import Summer from "./components/newsPages/Summer";
import Spring from "./components/newsPages/Spring";
import Winter from "./components/newsPages/Winter";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllComponents />} />

        <Route path="/country/:id" element={<Country />} />

        <Route path="/summer" element={<Summer />} />
        <Route path="/spring" element={<Spring />} />
        <Route path="/winter" element={<Winter />} />
      </Routes>
      <Footer />
    </>
  );
}

function AllComponents() {
  return (
    <>
      <Hero />
      <Popular />
      <Support />
      <About />
      <Reviews />
      <News />
    </>
  );
}

export default App;

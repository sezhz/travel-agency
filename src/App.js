import { Routes, Route, Link, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Support from "./components/Support";
import Header from "./components/Header";
import About from "./components/About";
import Reviews from "./components/Reviews";
import News from "./components/News";
import Footer from "./components/Footer";
import Country from "./components/Country";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllComponents />} />

        <Route path="/country/:id" element={<Country />} />
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

import { Routes, Route } from "react-router";
import Blog from "./pages/Blog";
import Flights from "./pages/Flights";
import HajjUmrah from "./pages/HajjUmrah";
import Packages from "./pages/Packages";
import Tours from "./pages/Tours";
import Visa from "./pages/Visa";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/flights" element={<Flights/>}/>
      <Route path="/hajj-umrah" element={<HajjUmrah/>}/>
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/tours" element={<Tours/>}/>
      <Route path="/visa" element={<Visa/>}/>
    </Routes>
    
    </>
  );
}

export default App;

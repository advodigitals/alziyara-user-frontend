import { Routes, Route } from "react-router";
import Blog from "./pages/Blog";
import Flights from "./pages/Flights";
import HajjUmrah from "./pages/HajjUmrah";
import Packages from "./pages/Packages";
import Tours from "./pages/Tours";
import Visa from "./pages/Visa";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import CertificateATT from "./pages/CertificateATT";
import OnlineServices from "./pages/OnlineServices";


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
      <Route path="/certificate-attestation" element={<CertificateATT/>}/>
      <Route path="/online-services" element={<OnlineServices/>}/>
    </Routes>
    
    </>
  );
}

export default App;

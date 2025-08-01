import { Routes, Route } from "react-router";
import Blog from "./pages/Blog";
import Flights from "./pages/Flights";
import HajjUmrah from "./pages/HajjUmrah";
import Packages from "./pages/Packages";
import Tours from "./pages/Tours";
// import Visa from "./pages/Visa";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import CertificateATT from "./pages/CertificateATT";
import OnlineServices from "./pages/OnlineServices";
import ContactUs from "./pages/ContactUs";
import Branches from "./pages/Branches";
import InternationalPackages from "./pages/InternationalPackages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import GCCVisa from "./pages/GCCVisa";
import GlobalVisa from "./pages/GlobalVisa";
import VisaIndvidualPage from "./pages/VisaIndvidualPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hajj-umrah" element={<HajjUmrah />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/tours" element={<Tours />} />
        {/* <Route path="/gcc-visa" element={<Visa />} /> */}
        <Route path="/certificate-attestation" element={<CertificateATT />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/international-packages" element={<InternationalPackages />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/gcc-visa" element={<GCCVisa />} />
        <Route path="/globla-visa" element={<GlobalVisa/>}/>
        <Route path="/globla-visa/visa-page" element={<VisaIndvidualPage/>}/>
      </Routes>
    </>
  );
}

export default App;

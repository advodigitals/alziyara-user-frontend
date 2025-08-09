import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
const Blog = React.lazy(() => import("./pages/Blog"))
const Flights = React.lazy(() => import("./pages/Flights"))
const HajjUmrah = React.lazy(() => import("./pages/HajjUmrah"))
const Packages = React.lazy(() => import("./pages/Packages"))
const Tours = React.lazy(() => import("./pages/Tours"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"))
const CertificateATT = React.lazy(() => import("./pages/CertificateATT"))
const OnlineServices = React.lazy(() => import("./pages/OnlineServices"))
const ContactUs = React.lazy(() => import("./pages/ContactUs"))
const Branches = React.lazy(() => import("./pages/Branches"))
const InternationalPackages = React.lazy(() => import("./pages/InternationalPackages"))
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"))
const TermsAndConditions = React.lazy(() => import("./pages/TermsAndConditions"))
const Home = React.lazy(() => import("./pages/Home"))
const GCCVisa = React.lazy(() => import("./pages/GCCVisa"))
const Visa = React.lazy(() => import('./pages/Visa'))
const VisaIndvidualPage = React.lazy(() => import("./pages/VisaIndvidualPage"))

// import Visa from "./pages/Visa"
// import Home from "./pages/Home";
// import Visa from "./pages/Visa";
// import Blog from "./pages/Blog";
// import Tours from "./pages/Tours";
// import GCCVisa from "./pages/GCCVisa";
// import AboutUs from "./pages/AboutUs";
// import Flights from "./pages/Flights";
// import Branches from "./pages/Branches";
// import Packages from "./pages/Packages";
// import ContactUs from "./pages/ContactUs";
// import HajjUmrah from "./pages/HajjUmrah";
// import GlobalVisa from "./pages/GlobalVisa";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import OnlineServices from "./pages/OnlineServices";
// import CertificateATT from "./pages/CertificateATT";
// import VisaIndvidualPage from "./pages/VisaIndvidualPage";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import InternationalPackages from "./pages/InternationalPackages";


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/visa" element={<Visa />} />
          <Route path="/globla-visa/visa-page" element={<VisaIndvidualPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import PackageIndividualPage from "./pages/PackageIndividualPage";
import { ThreeDot } from "react-loading-indicators";
// const Blog = React.lazy(() => import("./pages/Blog"))
// const Flights = React.lazy(() => import("./pages/Flights"))
const HajjUmrah = React.lazy(() => import("./pages/HajjUmrah"))
const Packages = React.lazy(() => import("./pages/Packages"))
// const Tours = React.lazy(() => import("./pages/Tours"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"))
// const CertificateATT = React.lazy(() => import("./pages/CertificateATT"))
// const OnlineServices = React.lazy(() => import("./pages/OnlineServices"))
const ContactUs = React.lazy(() => import("./pages/ContactUs"))
// const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"))
// const TermsAndConditions = React.lazy(() => import("./pages/TermsAndConditions"))
const Home = React.lazy(() => import("./pages/Home"))
const Visa = React.lazy(() => import('./pages/Visa'))
const VisaIndvidualPage = React.lazy(() => import("./pages/VisaIndvidualPage"))


// import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import Tours from "./pages/Tours";
// import AboutUs from "./pages/AboutUs";
// import Flights from "./pages/Flights";
// import Branches from "./pages/Branches";
// import Packages from "./pages/Packages";
// import ContactUs from "./pages/ContactUs";
// import HajjUmrah from "./pages/HajjUmrah";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import OnlineServices from "./pages/OnlineServices";
// import CertificateATT from "./pages/CertificateATT";
// import VisaIndvidualPage from "./pages/VisaIndvidualPage";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import InternationalPackages from "./pages/InternationalPackages";


function App() {
  return (
    <>
      <Suspense fallback={<div className="flex w-full h-[100vh] justify-center items-center capitalize gap-5 "  ><ThreeDot variant="bounce" color="#00b372" size="medium" text="Loading" textColor="#000000" /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/flights" element={<Flights />} /> */}
          <Route path="/hajj-umrah" element={<HajjUmrah />} />
          {/* <Route path="/tours" element={<Tours />} /> */}
          {/* <Route path="/certificate-attestation" element={<CertificateATT />} /> */}
          {/* <Route path="/online-services" element={<OnlineServices />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}
          <Route path="/visas/:type" element={<Visa />} />
          <Route path="/visa/:name" element={<VisaIndvidualPage />} />
          <Route path="/packages/:type" element={<Packages />} />
          {/* <Route path="/packages/:type" element={<PackageIndividualPage />} /> */}
          <Route path="/package/:name" element={<PackageIndividualPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

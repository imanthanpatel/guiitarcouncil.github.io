import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Mission from "./components/Mission";
import BuildFuture from "./components/BuildFuture";
import Scalar from "./components/Scalar";
import Associations from "./components/Associations";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Contact from "./components/Contact";
import Funding from "./components/Funding";
import Workshops from "./components/Workshops";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFoundPage from "./components/NotFoundPage";
import ThreeDPrintingWorkshop from "./components/ThreeDPrintingWorkshop";

import DroneWorkshop from "./components/DroneWorkshop";

const AppContent: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Routes key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <Carousel />
                <Mission />
                <BuildFuture />
                <Scalar />
                <Associations />
                <Faqs />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <About />
              </div>
            </>
          }
        />
        <Route
          path="/funding"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <Funding />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/workshop"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <Workshops />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <Contact />
              </div>
            </>
          }
        />
        <Route
          path="/termsandconditions"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <TermsAndConditions />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <PrivacyPolicy />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/3dprintingworkshop"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <ThreeDPrintingWorkshop/>
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/droneworkshop"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <DroneWorkshop/>
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                className={`min-h-screen bg-gray-50 transition-all duration-300 ${
                  isOpen ? "pt-[300px]" : "pt-[80px]"
                } md:pt-[80px]`}
              >
                <h1 className="text-3xl font-bold text-center pt-20">Login Portal is in development!</h1>
                <Footer />
              </div>
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

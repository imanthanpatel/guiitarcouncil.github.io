// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
// import Notfound from "./components/Notfound";
import Carousel from "./components/Carousel";
import Mission from "./components/Mission";
import BuildFuture from "./components/BuildFuture";
import Scalar from "./components/Scalar";
import Associations from "./components/Associations";
import Faqs from "./components/Faqs";
import About from "./components/About";

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
              <div className={`min-h-screen transition-all duration-300 ${isOpen ? "pt-[300px]" : "pt-[80px]"} md:pt-[80px]`}>
                <Carousel />
                <Mission/>
                <BuildFuture/>
                <Scalar/>
                <Associations/>
                <Faqs/>
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
              <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isOpen ? "pt-[300px]" : "pt-[80px]"} md:pt-[80px]`}>
                <About/>
                {/* <Footer /> */}
              </div>
            </>
          }
        />
        <Route
          path="/funding"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isOpen ? "pt-[300px]" : "pt-[80px]"} md:pt-[80px]`}>
                <h1 className="text-3xl text-center pt-20">
                  Funding Page
                </h1>
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/programs"
          element={
            <>
              <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
              <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isOpen ? "pt-[300px]" : "pt-[80px]"} md:pt-[80px]`}>
                <h1 className="text-3xl text-center pt-20">
                  Programs Page
                </h1>
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
              <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isOpen ? "pt-[300px]" : "pt-[80px]"} md:pt-[80px]`}>
                <h1 className="text-3xl text-center pt-20">
                  Contact Page
                </h1>
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
              <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isOpen ? "pt-[300px]" : "pt-[80px]"} md:pt-[80px]`}>
                <h1 className="text-3xl text-center pt-20">
                  Login Page
                </h1>
                <Footer />
              </div>
            </>
          }
        />
        {/* <Route path="*" element={<Notfound />} /> */}
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
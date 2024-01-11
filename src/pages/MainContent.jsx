import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components";
import {
  Overview,
  Contact,
  Hero,
  Works,
  Experience,
  Tech,
  Resume,
} from "../pages";
import { LayoutGroup } from "framer-motion";

const MainContent = () => {
  return (
    <>
      <Navbar />
      <div className="relative z-0 pt-[100px] px-2 md:px-4 lg:px-6 xl:px-8 mx-auto max-w-screen-xl">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <LayoutGroup>
                <Hero />
                <Overview />
                <Experience />
                <Tech />
                <Works />
                <Contact />
              </LayoutGroup>
            }
          />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
export default MainContent;

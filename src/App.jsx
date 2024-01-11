import React from "react";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import { MainContent } from "../src/pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <ParticlesBackground />
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </div>
  );
};

export default App;

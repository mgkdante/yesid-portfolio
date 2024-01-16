import React from "react";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import { BrowserRouter } from "react-router-dom";
import MainContentWithGA from "./pages/MainContentWithGA";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <ParticlesBackground />
      <BrowserRouter>
        <MainContentWithGA />
      </BrowserRouter>
    </div>
  );
};

export default App;

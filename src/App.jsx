import React from "react";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import { MainContent } from "../src/pages";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <ParticlesBackground />
      <MainContent />
    </div>
  );
};

export default App;

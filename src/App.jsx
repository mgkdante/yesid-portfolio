import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Works,
  Experience,
  Tech,
  Navbar,
} from "./components";

import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

const App = () => {
  const particlesInit = (tsParticles) => {
    loadTrianglesPreset(tsParticles);
  };

  return (
    <BrowserRouter /*basename={import.meta.env.DEV ? '/' : '/yesid-portfolio/'}*/
    >
      <div className="relative z-0 bg-primary">
        <Particles
          options={{
            preset: "triangles",
            fpsLimit: 60,
            particles: {
              number: {
                density: {
                  enable: true,
                  value_area: 800, // Lower values will decrease the number of particles on desktop
                  // devices
                },
              },
              move: {
                speed: 2,
              },
            },
            detectRetina: true, // Enable retina detection
            retina_detect: true, // Enable retina detection
            responsive: [
              {
                breakpoint: 768, // Apply the following settings when the screen width is less than
                // 768px
                options: {
                  particles: {
                    number: {
                      density: {
                        enable: true,
                        value_area: 2000, // Higher values will decrease the number of
                        // particles on mobile devices
                      },
                    },
                  },
                },
              },
            ],
          }}
          init={particlesInit}
        />
        <Navbar />
        <div className="relative z-0 pt-[100px] px-2 md:px-4 lg:px-6 xl:px-8 mx-auto max-w-screen-lg">
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
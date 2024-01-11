import React from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

const ParticlesBackground = () => {
  const particlesInit = (tsParticles) => {
    loadTrianglesPreset(tsParticles);
  };

  return (
    <Particles
      options={{
        preset: "triangles",
        fpsLimit: 60,
        particles: {
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
          },
          move: {
            speed: 2,
          },
        },
        detectRetina: true,
        retina_detect: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              particles: {
                number: {
                  density: {
                    enable: true,
                    value_area: 2000,
                  },
                },
              },
            },
          },
        ],
      }}
      init={particlesInit}
    />
  );
};

export default ParticlesBackground;

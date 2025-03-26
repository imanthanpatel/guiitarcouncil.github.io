// src/components/Particle.tsx
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

// Initialize the particle engine once at the module level
let engineInitialized = false;

const initializeParticles = async () => {
  if (engineInitialized) {
    console.log("Engine already initialized");
    return;
  }
  console.log("Initializing particles at module level...");
  try {
    await initParticlesEngine(async (engine: Engine) => {
      console.log("Loading tsparticles features...");
      await loadFull(engine);
      console.log("tsparticles features loaded");
    });
    engineInitialized = true;
    console.log("Particle engine initialized at module level");
  } catch (error) {
    console.error("Failed to initialize tsparticles:", error);
    throw error;
  }
};

const Particle: React.FC = () => {
  const [init, setInit] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (init) return;

    initializeParticles()
      .then(() => {
        setInit(true);
        console.log("setInit(true) called");
      })
      .catch((err) => {
        console.error("Error in useEffect:", err);
        setError("Failed to initialize particles: " + err.message);
      });

    return () => {
      console.log("Cleaning up particle engine");
    };
  }, [init]);

  const particlesLoaded = useCallback((container: Container | undefined): void => {
    console.log("Particles Loaded", container);
  }, []);

  const options: ISourceOptions = {
    autoPlay: true,
    fpsLimit: 150,
    detectRetina: true,
    fullScreen: { enable: false }, // Disable full-screen mode
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          links: { opacity: 1 },
        },
        push: { quantity: 2 },
        repulse: { distance: 100, duration: 0.7 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.9,
        width: 2.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 3.0,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100,
      },
      opacity: { value: 0.9 },
      shape: { type: "polygon" },
      size: { value: { min: 1, max: 4 } },
    },
    background: {
      color: { value: "#2b5482" },
    },
    motion: {
      reduce: { factor: 4, value: true },
    },
  };

  console.log("Rendering Particle component, init:", init);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      {init ? (
        <div className="absolute top-0 left-0 w-full h-full">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="w-full h-full"
          />
        </div>
      ) : (
        <p className="text-white">Loading particles...</p>
      )}
    </>
  );
};

export default Particle;
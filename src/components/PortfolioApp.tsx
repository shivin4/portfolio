"use client";

import { useState, useEffect, useCallback } from "react";
import { BootSequence } from "@/components/boot/BootSequence";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { ParticleField } from "@/components/effects/ParticleField";
import { BackgroundScene } from "@/components/effects/BackgroundScene";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { KeyboardEasterEgg } from "@/components/easter-eggs/KeyboardEasterEgg";

export function PortfolioApp() {
  const [booted, setBooted] = useState(false);
  const [skipBoot, setSkipBoot] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("shivin-booted");
    if (seen) {
      setSkipBoot(true);
      setBooted(true);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem("shivin-booted", "1");
    setBooted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && booted) {
        setEasterEgg(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [booted]);

  return (
    <>
      {!skipBoot && !booted && <BootSequence onComplete={handleBootComplete} />}

      {booted && (
        <>
          <CustomCursor />
          <ParticleField />
          <BackgroundScene />
          <AmbientGlow />
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <KeyboardEasterEgg
            show={easterEgg}
            onHide={() => setEasterEgg(false)}
          />
        </>
      )}
    </>
  );
}

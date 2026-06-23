// Single-page: tutte le sezioni in ordine, ognuna data-driven dai file in src/data.

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Extra from "@/components/sections/Extra";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Extra />
      <Contact />
    </main>
  );
}

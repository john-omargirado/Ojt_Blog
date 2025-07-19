"use client";

import { HeroSectionOne } from "@/components/hero";
import { NavbarDemo } from "@/components/navbar";
import {LearningSection} from "@/components/Sections";
import { ContactSection } from "@/components/Sections";
import { FooterSection } from "@/components/Sections";




export default function Homepage() {
  return (
    <main className="flex flex-col w-full scroll-smooth">
      {/* Sticky Navbar */}
      <NavbarDemo />

      {/* Hero */}
      <section id="home" className="min-h-screen">
        <HeroSectionOne />
      </section>

      {/* Learnings */}
      <section id="learnings" className="min-h-screen">
        <LearningSection />
      </section>

      {/* Experience */}
      <section id="experience" className="h-70">
        <ContactSection />
              {/* Footer */}
      <FooterSection />
      </section>


    </main>
  );
}

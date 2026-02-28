"use client";

import Hero from "../components/sections/Hero";
import WhyClientsChooseMe from "../components/sections/WhyClientsChooseMe";
import Services from "../components/sections/Services";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import WorkProcess from "../components/sections/WorkProcess";
import TechStack from "../components/sections/TechStack";
import Testimonials from "../components/sections/Testimonials";
import WhyHireMe from "../components/sections/WhyHireMe";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyClientsChooseMe />
      <Services />
      <FeaturedProjects />
      <WorkProcess />
      <TechStack />
      <Testimonials />
      <WhyHireMe />
      <ContactSection />
    </>
  );
}

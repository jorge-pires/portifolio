import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SiteFooter />
    </>
  );
}

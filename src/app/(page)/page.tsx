import Aboutme from "@/section/aboutme";
import Certification from "@/section/certification";
import Cta from "@/section/cta";
import Hero from "@/section/hero";
import Journey from "@/section/journey";
import Project from "@/section/project";
import TechStack from "@/section/techstack";

export default function Home() {
  return (
    <>
      <Hero/>
      <Aboutme/>
      <Journey/>
      <Project/>
      <TechStack/>
      <Certification/>
      <Cta/>
    </>
  );
}

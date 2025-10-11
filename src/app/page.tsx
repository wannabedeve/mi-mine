import AboutCard from "@/components/cards/about-card";
import BlogCard from "@/components/cards/blog-card";
import ContactCard from "@/components/cards/contact-card";
import ExperienceCard from "@/components/cards/experience-card";
import ProjectCard from "@/components/cards/project-card";
import SkillsCard from "@/components/cards/skills-card";
import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (


    <>
      <div className="mt-[5rem]">

        <Hero />
      </div>
      <section className="flex justify-center">
        <div className="w-full flex justify-center items-center mx-auto my-12">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 xs:gap-12 md:gap-14"
          >
            <div className="glass">

              <AboutCard />
            </div>
            <div className="glass">

              <SkillsCard />
            </div>
            <div className="glass">

              <ExperienceCard />
            </div>
            <div className="glass">

              <ProjectCard />
            </div>

            <div className="glass">

              <ContactCard />
            </div>
            <div className="glass">

              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

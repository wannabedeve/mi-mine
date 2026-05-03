'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './card.css'
import { SelectiveFocusSection } from './SelectiveFocusSection';


const sections = [
  {
    key: 'about',
    title: 'About Me',
    image:
      '/images/other/about.jpg',
    src: `/about`,
    // component: "About",
    // content: "content.about.description",
  },
  {
    key: 'experience',
    title: 'Experience',
    image: '/images/other/exp.webp',

    src: `/experience`,
    // component: "Experience",
    // content: "content.experience.description",
  },
  {
    key: 'skills',
    title: 'SKILLS',
    image: '/images/other/skills.webp',

    src: `/skills`,
    // component: "Skills",
    // content: "content.projects.description",
  },
  {
    key: 'projects',
    title: 'Projects',
    image: '/images/other/projects.jpg',
    src: `/projects`,
    // component: "Projects",
    // content: "content.projects.description",
  },
];

gsap.registerPlugin(ScrollTrigger);


export type SectionData = {
  key: 'about' | 'experience' | 'skills' | 'projects';
  title: string;
  image: string;
  src: string;
  // content: string;
};


const SelectiveFocus = () => {


  if (!sections.length) return null;

  return (
    <div className='sel-body'>
      {sections.map((section, index) => (
        <SelectiveFocusSection
          key={index}
          image={`${section.image}`}
          link={section.src}
          title={section.title}
          src={section.src}
        />
      ))}
    </div>
  );
};


export default SelectiveFocus;

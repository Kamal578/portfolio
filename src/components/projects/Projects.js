import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="EDUMENT"
          des="Website for an innovative LMS platform for private tutors."
          src={projectTwo}
          stack="React, Tailwind, Redux, Nest.js"
          link={"https://edument.az/"}
        />
        <ProjectsCard
          title="TTServices"
          des=" Website for a local transportation company."
          src={projectOne}
          stack="Laravel, Tailwind, AlpineJS"
          link={"https://ttservices.az/"}
        />

        <ProjectsCard
          title="COFFECO"
          des="Website for a local coffee shop with multiple branches."
          src={projectThree}
          stack="HTML, CSS, JS"
          link={"https://coffeco.az/"}
        />
        <ProjectsCard
          title="PRONEO"
          des="Website for a local construction company focused on building smart homes."
          src={projectFour}
          stack="Laravel, SASS, JavaScript"
          link={"https://proneo.az/"}
        />
        <ProjectsCard
          title="Wide Travel"
          des="Website for an international travel agency based in Azerbaijan."
          src={projectFive}
          stack="Laravel, SASS, JavaScript"
          link={"https://widetravel.com/"}
        />
        <ProjectsCard
          title="ŞANLI URFA"
          des="Website for a local restaurant with a delivery system."
          src={projectSix}
          link={"https://sanliurfa.az/"}
        />
      </div>
    </section>
  );
};

export default Projects;

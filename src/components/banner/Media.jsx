import React from "react";
import { FaLinkedinIn, FaReact, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/ahmadov-kamal/"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Kamal578" className="bannerIcon">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ahmadov.kamal/"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;

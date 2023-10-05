import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="font-titleFont flex gap-20"
    >
      <div className="mb-[19rem] md:mb-0">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Edument (May 2023 - Present)"
            result="Baku, Azerbaijan"
            des="Leading development of LMS platform using React.js, Redux, Tailwind CSS, SASS, Nest.js, Redis, MongoDB, MySQL. Collaborated in agile team."
          />
          <ResumeCard
            title="Software Developer & Teaching Assistant"
            subTitle="Maestro Studio & School (Feb 2023 - Jun 2023)"
            result="Baku, Azerbaijan"
            des="Built SPA with VueJS, NuxtJS, VueX, and responsive pages with Tailwind, Pure CSS, SASS. Contributed to backend with Django REST Framework. Assisted in teaching courses."
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="The Javachip LLC (May 2022 - Dec 2022)"
            result="Baku, Azerbaijan"
            des="Developed responsive web pages using HTML, CSS (SASS, Tailwind), JavaScript (React.js, jQuery). Created server-side components with PHP Laravel, MySQL, Nest.js, MongoDB, Redis."
          />
          <ResumeCard
            title="Python Development Intern"
            subTitle="JIS - Jeykhun Imanov Studio (Jan 2022 - Apr 2022)"
            result="Baku, Azerbaijan"
            des="Developed web apps with Django, implemented user authentication, and RESTful APIs. Designed user-friendly interfaces with HTML, CSS, JavaScript. Conducted data processing and web scraping."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, stack, link }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleCardHover = () => {
    setIsCardHovered(true);
  };

  const handleCardLeave = () => {
    setIsCardHovered(false);
  };

  return (
    <div
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className={`grayscale-50 hover:grayscale-0 w-full h-50 object-cover group-hover:scale-110 duration-300 cursor-pointer ${
            isCardHovered ? "grayscale grayscale-0" : "grayscale"
          }`}
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-bold">
              {title}
            </h3>
            <div
              className="flex gap-2"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={link} target="_blank" rel="noreferrer">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          {/* tech stack */}
          <div className="flex gap-2 mt-3">
            <p className="text-sm text-gray-400 hover:text-gray-100 duration-300">
              Tech Stack:
            </p>
            <span className="text-sm text-gray-400">{stack}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

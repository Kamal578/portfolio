import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kamal Ahmadov</h3>
        <p className="text-lg font-normal text-gray-400">Software Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Let's collaborate and create something awesome together.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <a
            href="tel:+994 55 897 96 75"
            className="text-lightText hover:text-designColor transition-colors duration-300"
          >
            +994 55 897 96 75
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <a
            href="mailto:ahmadov.kamal423@gmail.com"
            className="text-lightText hover:text-designColor transition-colors duration-300"
          >
            ahmadov.kamal423@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default ContactLeft;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer.",
      "Computer Science Student.",
      "Neophyte ML Engineer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">KAMAL AHMADOV</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm font-bodyFont leading-6 tracking-wide">
          <span className="text-lg">📍Based in Baku, Azerbaijan.<br/></span>I am a highly motivated 19 years old
          computer science senior and software developer with experience
          developing dependable and user-friendly web-based solutions. I am a
          quick learner with problem-solving experience who is eager to learn
          about new technologies. Learning new things, accepting challenges, and
          undertaking complex tasks give me more opportunities to further
          develop and grow both personally and professionally.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;

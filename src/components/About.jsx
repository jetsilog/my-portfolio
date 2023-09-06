import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">About</p>
        </div>
        <p className="text-xl mt-20 text-justify">
          Greetings! I'm Jhon Earvin B. Tangonan, a recent graduate with a
          degree in Bachelor of Scince in Information Technology. My journey as
          a Web Developer has just begun, but my passion for Web Development
          knows no bounds. I may be new to the field, but I bring fresh
          perspectives, boundless energy, and a hunger to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default about;

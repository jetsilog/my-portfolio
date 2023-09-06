import React from "react";
import HeroImage from "../assets/heroImage.png";
import { useTypewriter } from "react-simple-typewriter";

import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";

const Home = () => {
  const [text] = useTypewriter({
    words: [" JET", " a Web Developer"],
    loop: {},
  });

  const socials = [
    {
      id: 1,
      src: fb,
      href: "https://www.facebook.com/ejtngn.jet/",
    },
    {
      id: 2,
      src: ig,
      href: "https://www.instagram.com/jet.ejt/",
    },
    {
      id: 3,
      src: github,
      href: "https://github.com/jetsilog",
    },
    {
      id: 4,
      src: resume,
      href: "/RESUME_TANGONAN.pdf",
      download: true,
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Jhon Earvin Tangonan
          </h2>
          <h4 className="text-white pt-3 font-bold text-2xl">
            I'm
            <span className="text-cyan-500">{text}</span>
          </h4>
          <p className="text-gray-500 py-4 max-w-md">
            Hi there! I'm a dedicated Web Developer based in the Philippines
          </p>
          <div className="w-full flex flex-row space-x-8 py-3">
            {socials.map(({ id, src, href, download }) => (
              <div key={id}>
                <a href={href} download={download}>
                  <img src={src} alt="" className="w-10 sm:w-12 mx-auto" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="border-4 border-white rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

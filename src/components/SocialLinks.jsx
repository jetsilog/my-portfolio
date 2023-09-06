import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { toast } from "react-toastify";

const SocialLinks = () => {
  const notify = () => toast.success("Downloaded");
  const links = [
    {
      id: 1,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jhonearvintangonan@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/RESUME_TANGONAN.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[40%] left-0">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center h-14 w-40 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
              onClick={notify}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

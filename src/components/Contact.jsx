import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_mqicqb4";
    const templateID = "template_i1diiv7";
    const publicKey = "BtRjDkDPPAc118wVU";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jet",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        toast.success("Email sent");
        console.log("Email Sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div
      name="contact"
      className="bg-white dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen p-4 text-gray-500 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Contact</p>
          <p className="py-6">Contact me here</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 dark:text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-500 dark:text-white focus:outline-none"
            />
            <textarea
              name="messge"
              value={message}
              rows="10"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 dark:text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

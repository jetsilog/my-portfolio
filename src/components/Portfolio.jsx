import React from 'react';
import damsashs from '../assets/portfolio/damsashs.png';

const Portfolio = () => {
  return (
    <div
      name='portfolio'
      className='bg-white dark:bg-gradient-to-b from-black to-gray-800 text-gray-500 dark:text-white h-screen pb-32'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='tex-black text-4xl font-bold inline'>Project</p>
          <p className='py-6'>
            I have developed a School Portal with a Record Management System
            designed to streamline various administrative tasks. The portal
            includes features such as student profile management, seamless
            student enlistment, grade viewing, a student checklist, and PDF
            generation. Students can easily view their schedules, while teachers
            have access to a clear overview of their enrolled students.
          </p>
        </div>
        <div className='flex flex-col mx-auto items-center justify-center md:px-12 sm:px-12'>
          <div className='mb-10 shadow-md shadow-gray-600 rounded-lg'>
            <img
              src={damsashs}
              alt=''
              className='rounded-md duration-500 hover:scale-105'
            />
            {/*
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

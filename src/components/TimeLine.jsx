import React from 'react';

const experiences = [
  {
    date: 'FEB 2018',
    title: 'ON-THE-JOB-TRAINEE',
    company: 'POLICE REGIONAL OFFICE 02',
    description:
      '• Greeted incoming visitors and customers professionally and provided friendly, knowledgeable assistance. \n• Delivered clerical support by handling a range of routine and special requirements.',
  },
  {
    date: 'MAY 2018',
    title: 'SUMMER EMPLOYEE',
    company: 'JPT, ACCOUNTING AND FIRMS',
    description:
      '• Work with the departments of sales, accounting, and law to coordinate debt collection activities. \n• Data entry for client databases, billing details, payroll, and tax records.',
  },
  {
    date: 'FEB 2023',
    title: 'STUDENT INTERN',
    company: 'INSTRUCTURAL MEDIA CENTER',
    description:
      '• Take pictures of graduating students. \n• Editing photos. \n• Maintaining and managing photography equipment. \n• Manage and submit folders to appropriate persons.',
  },
];

const TimeLine = () => {
  return (
    <div name='experiences'>
      <div className='min-h-screen flex flex-col justify-center bg-white dark:bg-gradient-to-b from-black to-gray-800'>
        <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-24'>
          <div className='flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16'>
            <div className='w-full max-w-3xl mx-auto'>
              <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
                {experiences.map((experience, index) => (
                  <div className='relative' key={index}>
                    <div className='md:flex items-center md:space-x-4 mb-3'>
                      <div className='flex items-center space-x-4 md:space-x-2 md:space-x-reverse'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-calendar'
                            viewBox='0 0 16 16'
                          >
                            <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                          </svg>
                        </div>

                        <time className='font-caveat font-medium text-xl text-cyan-500 md:w-28'>
                          {experience.date}
                        </time>
                      </div>

                      <div className='text-gray-400 ml-14'>
                        <span className='text-gray-500 dark:text-white font-bold'>
                          {experience.title}
                        </span>{' '}
                        {experience.company}
                      </div>
                    </div>

                    <div className='p-4 rounded text-gray-500 dark:text-white shadow-md shadow-gray-500 ml-14 md:ml-44'>
                      {experience.description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

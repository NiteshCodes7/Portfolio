import React, { useState } from "react";
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaPython,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <FaNodeJs key="FaNodejs" />,
          <SiExpress key="SiExpressjs" />,
          <FaGithub key="FaGithubjs" />,
        ],
      },
      {
        title: 'Programming Languages',
        icons: [
          <FaJava key="FaJava" />,
          <FaPython key="FaPython" />,
          <SiCplusplus key="SiCplusplus" />,
        ],
      },
      {
        title: 'Databases',
        icons: [
          <SiMongodb key="SiMongodbjs" />,
          <SiMysql key="SiMysqljs" />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="FaFigma" />,
          <SiFramer key="SiFramer" />,
        ],
      },
    ],
  },
  {
    title: 'Experience',
    info: [
      {
        title: 'Frontend Developer – TNP Website, Kalyani Government Engineering College',
        stage: '2024',
        description: [
          'Developed and maintained the official Training & Placement (TNP) portal.',
          'Implemented responsive and accessible UI using React.js and Tailwind CSS.',
          'Collaborated with a student tech team to improve site performance and usability.',
          'Optimized frontend components for cross-browser compatibility and mobile support.'
        ]
      },
    ]
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Holy Angels School',
        stage: '2022',
      },
      {
        title: 'Bachelors in Technology',
        stage: '2023 - Present',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[295px] w-[600px] h-[601px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center xl:ml-2 px-4 md:px-8 xl:px-0">
          <motion.h2
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl md:text-4xl md:mt-5 h2 xl:text-6xl"
          >
            Captivating <span className="text-accent">stories</span> birth magnificent designs
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm md:text-lg md:mt-3 max-w-[500px] mx-auto xl:mx-0 xl:mb-12"
          >
            Hi, I&apos;m Nitesh Ghosh — a full stack developer skilled in the MERN stack, with a strong focus on building scalable and intelligent web applications. I enjoy turning ideas into practical digital solutions, from AI-powered platforms to collaborative college projects. I’m driven by clean code, thoughtful design, and the constant pursuit of learning and innovation.
          </motion.p>
        </div>

        {/* Tabs and Content */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[42%] h-[200px] xl:h-[421px]"
        >
          {/* Tabs */}
          <div className="mt-3 md:mt-12 flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} text-sm cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start overflow-y-auto pr-2">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="text-sm flex-1 text-white/60 w-full"
              >
                <div className="font-light text-base text-white">{item.title}</div>
                <div className="text-xs mb-2">{item.stage}</div>

                {item.description && (
                  <ul className="list-disc list-inside text-xs space-y-1">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {item.icons && (
                  <div className="flex gap-x-4 mt-2">
                    {item.icons.map((icon, iconIndex) => (
                      <div className="text-sm md:text-2xl text-white" key={iconIndex}>
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

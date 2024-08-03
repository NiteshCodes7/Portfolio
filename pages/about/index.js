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
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiC,
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
          <SiFramer key="SiFramer" />,
        ],
      },
      {
        title: 'Programming Languages',
        icons: [
          <FaJava key="FaJava" />,
          <FaPython key="FaPython" />,
          <SiC key="SiC" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="FaFigma" />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intern - Adaovi',
        stage: '2024',
      },
    ],
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
            Hi, I&apos;m Nitesh Ghosh, a passionate web developer and programmer with a keen interest in creating seamless and engaging digital experiences. Currently, I am a second-year Electrical Engineering student at Kalyani Government Engineering College, where I am honing my skills in various programming languages and frameworks.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[42%] h-[200px] xl:h-[421px]"
        >
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="text-sm flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div className="text-sm md:text-2xl text-white" key={iconIndex}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

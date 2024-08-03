import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return <div className="bg-primary/60 h-full">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 h-full container mx-auto xl:text-left">
        
        <motion.h1 
        variants={fadeIn('down', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className="mt-[60px] lg:mt-0 h1">Transforming Visions <br /> Into <span className="text-accent">Digital Reality</span>
        </motion.h1>
        
        <motion.p 
        variants={fadeIn('down', 0.3)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'  
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Welcome to my digital realm, where creativity meets technology. As an individual student, I transform innovative ideas into sleek websites and captivating user experiences. Join me in turning your visions into digital reality.
        </motion.p>
        
        <div className="flex justify-center xl:hidden relative z-50">
          <ProjectsBtn />
        </div>
        
        <motion.div 
        variants={fadeIn('down', 0.4)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className="hidden xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    <div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-no-repeat xl:bg-right w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        <ParticlesContainer />

        <motion.div 
        variants={fadeIn('up', 0.5)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        transition={{duration: 1, ease : easeInOut}}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Home;

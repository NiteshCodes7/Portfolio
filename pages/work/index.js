import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-cente">
      <Circles />
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex-1 xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2 
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 mt-0 xl:mt-12">
                My Work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 max-w-[400px] text-sm mx-auto md:text-lg lg:mx-0">
              I&apos;m a MERN full stack developer with a passion for building smart, user-focused web apps. From AI-powered tools like Essentia.ai and CropWise to college-level platforms, I bring a balance of clean code and practical design. I also enjoy photography, which sharpens my eye for detail and UI aesthetics.
            </motion.p>

            </div>

              <motion.div 
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="w-full xl:max-w-[65%]">
                <WorkSlider />
              </motion.div>
            
           </div>
        </div>
    </div>
  )
};


export default Work;

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
              className="h2 mt-10 xl:mt-12">
                My Work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              As a beginner in the world of web development, I bring a fresh perspective and a keen eagerness to learn. In addition to my coding journey, I am passionate about photography, capturing the beauty of the world through my lens. This unique combination of technical skills and artistic vision shapes my approach to creating digital experiences.
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

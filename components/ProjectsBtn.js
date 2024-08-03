import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/work">
        <div className="relative w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-100">
          <Image 
            src="/rounded-text.png" 
            width={121} 
            height={128} 
            alt="Project Button" 
            className="animate-spin-slow w-[85px] h-[85px] sm:w-[110px] sm:h-[110px] lg:w-[121px] lg:h-[128px]" 
          />
          <HiArrowRight className="absolute text-xl sm:text-2xl group-hover:translate-x-4 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;

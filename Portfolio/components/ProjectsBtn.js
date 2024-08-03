import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href={'/work'} className="relative w-[160px] h-[160px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
      <Image 
      src={'/rounded-text.png'} 
      width={121} 
      height={128}
      alt="" 
      className="animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]" />
      <HiArrowRight className="absolute text-2xl group-hover:translate-x-4 transition-all duration-300"/>
    </Link>
    </div>;
};

export default ProjectsBtn;

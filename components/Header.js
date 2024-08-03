import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';


const Header = () => {
  return ( 
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-6">
        <Link className="" href={'/'}>
          <Image 
          src={'/logo.svg'} 
          width={100} 
          height={48} 
          alt="" 
          priority={true} 
          className="max-w-[50px] max-h-[70px] xl:mt-10 xl:max-w-[150px] xl:max-h-[130px]"/>
        </Link>

        <Socials />
      </div>
    </div>
  </header>
  )
};

export default Header;

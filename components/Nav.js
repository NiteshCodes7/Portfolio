// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

import Link from "next/link"
import {useRouter} from "next/router"

// nav data
export const navData = [
  { name: 'home', 
    path: '/', 
    icon: <HiHome /> 
  },
  { name: 'about', 
    path: '/about', 
    icon: <HiUser /> 
  },
  // { name: 'research', 
  //   path: '/research', 
  //   icon: <HiRectangleGroup /> 
  // },
  { name: 'work', 
    path: '/work', 
    icon: <HiViewColumns /> 
  },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col justify-between items-center xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index) => {
          const isActive = link.path === pathName;
          return (
            <Link href={link.path} key={index}>
              <div className={`${isActive ? 'text-accent' : 'group hover:text-purple-500 transition-all duration-300'} relative flex`}>
                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                  <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                    <div className='text-[12px] leading-none font-semibold capitalize'>
                      {link.name}
                    </div>
                  </div>
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute right-[49px] top-[5.5px]'>
                  </div>
                </div>
                
                <div className="text-[20px] sm:text-[24px] md:text-[19px] lg:text-[23px] xl:text-[20px]">
                  {link.icon}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Nav;

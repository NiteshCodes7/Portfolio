import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';
import Link from 'next/link';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Essentia.AI - AI Powered Pdf Summariser SaaS',
          path: '/thumb0.png',
          link: 'https://essentia-ai-ochre.vercel.app/'
        },
        {
          title: 'Resumate - AI Resume Builder',
          path: '/thumb1.png',
          link: 'https://athumb1.pngi-resume-builder-rj1b.vercel.app/'
        },
        {
          title: 'Figma - Clone',
          path: '/thumb2.png',
          link: 'https://figma-clone-two-xi.vercel.app/'
        },
        {
          title: 'PixSearch - AI Image Generator',
          path: '/thumb3.jpg',
          link: 'https://pix-search-2958.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'In a lonely weather',
          path: '/thumb5.png',
          link: 'https://www.instagram.com/p/C9NNcvRPw0F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
          title: 'Godess Inside',
          path: '/thumb7.png',
          link: 'https://www.instagram.com/p/C5LwRZ9vk9-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
          title: 'The Horizon',
          path: '/thumb6.png',
          link: 'https://www.instagram.com/p/C9m-dsSvraB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
          title: 'The flight moment',
          path: '/thumb8.png',
          link: 'https://www.instagram.com/p/C8e3uQVPjON/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
  <Swiper 
    spaceBetween={10}
    pagination = {{
      clickable : true,
    }}
    modules = {[Pagination]}
    className = 'h-[280px] sm:h-[480px]'
  >
    {workSlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer m-auto'>
          {slide.images.map((image, index) => {
            return (
              <div 
              className='relative rounded-lg overflow-hidden flex items-center justify-center group' 
              key={index}
              >
                <div className='flex overflow-hidden relative items-center justify-center group'>
                  <Image src={image.path} width={500} height={300} alt=''/>
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div> 
                  {/* title */}

                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>

                  <Link href={`${image.link}`}>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      {/* title port 1 */}
                      <div className='delay-100'>LIVE</div>
                      {/* title part 2 */}
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.title}</div>
                      {/* icon */}
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                    </div>
                  </Link>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>
  )
};

export default WorkSlider;

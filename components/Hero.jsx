import Link from 'next/link';
import { Download, Send, MapPin, MapPinIcon, MapPinnedIcon } from 'lucide-react';
import { RiBriefcase4Fill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';
import React from 'react';
import DevImg from './DevImg';
import Badge from './Badge_CGPT';
import Socials from './Socials';

const Hero = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    window.open('/public/resume.pdf', '_blank');
  };

  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              CyberSecurity Consultant | Program Manager
            </div>
            <h1 className='text-xl sm:text-4xl lg:text-6xl mb-4'>
              Hello, My name is Ismail Sharieff
            </h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              "Empower your tomorrow with today's actions."
            </p>
            {/* buttons */}
            {/* <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'> */}
              {/* <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link> 
              <Button variant='secondary' className='gap-x-2'>
                Download CV
                <Download size={18} />
              </Button> */}
              {/* <a href="https://drive.google.com/file/d/1bgpNaxZoSfj2M3SbxrcwinUsWyjqXJa6/view?usp=drive_link" download>Download CV</a> */}
            {/* </div> */}
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[24%] -left-[8rem] w-[100px] h-[30px] flex items-center justify-center !important'
              icon={<RiBriefcase4Fill />}
              endCountNum={17}
              endCountText='+'
              badgeText='Years Of Experience'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[4rem] w-[100px] h-[30px] flex items-center justify-center !important'
              icon={<RiTodoFill />}
              badgeText='Global Industry experience'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[1%] -right-14 w-[100px] h-[30px] flex items-center justify-center !important'
              icon={<MapPin />}
              endCountNum={7}
              badgeText='Bangalore, India'
            />
            <Badge
              containerStyles='absolute top-[35%] -right-14 w-[100px] h-[30px] flex items-center justify-center !important'
              icon={<MapPin />}
              endCountNum={1}
              badgeText={<span className="text-xs font-semibold text-center">Melbourne, Australia</span>}
            />
            <Badge
              containerStyles='absolute top-[18%] -right-14 w-[100px] h-[30px] flex items-center justify-center !important'
              icon={<MapPin />}
              endCountNum={6}
              badgeText='Brussels, Belgium'
            />
            <Badge
              containerStyles='absolute top-[52%] -right-14 w-[100px] h-[30px] flex items-center justify-center !important'
              icon={<MapPin />}
              endCountNum={1}
              badgeText='Madrid, Spain'
            />
            <Badge
              containerStyles='absolute top-[69%] -right-14 w-[120px] h-[40px] flex items-center justify-center !important'
              icon={<MapPin />}
              endCountNum={1}
              badgeText='Toronto, Canada'
            />
            <Badge
              containerStyles='absolute top-[86%] -right-14 w-[120px] h-[40px] flex items-center justify-center !important'
              icon={<MapPinnedIcon />}
              endCountNum={1}
              endCountText='+'
              badgeText='Current Location: NJ, USA'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom pl-20'
              imgSrc='/hero/developer.png'
              imgStyle={{ width: '100%', height: 'auto' }} // Apply width: 100% and height: auto
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;


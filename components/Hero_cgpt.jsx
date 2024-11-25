import Link from 'next/link';
// import { Button } from './ui/button';
import { Download, Send, MapPin, MapPinIcon, MapPinnedIcon } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import React from 'react';
// components
import DevImg from './DevImg';
import Badge from './Badge_CGPT';
import Socials from './Socials';

const Hero = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    window.open('/public/resume.pdf', '_blank');
  };

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              CyberSecurity Consultant | Program Manager
            </div>
            <h1 className="text-xl sm:text-4xl lg:text-6xl mb-4">
              Hello, My name is Ismail Sharieff
            </h1>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              "Empower your tomorrow with today's actions."
            </p>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[15%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={17}
              endCountText="+"
              badgeText="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              badgeText="Global Industry Experience"
            />
            {/* Right-side badges */}
            <Badge
              containerStyles="absolute top-[10%] -right-14"
              icon={<MapPin className="text-primary dark:text-secondary text-lg" />}
              badgeText="India"
            />
            <Badge
              containerStyles="absolute top-[25%] -right-14 w-[150px] h-[50px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-md"
              icon={<MapPin className="text-primary dark:text-secondary text-lg" />}
              badgeText="Australia"
            />
            <Badge
              containerStyles="absolute top-[40%] -right-14 w-[150px] h-[50px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-md"
              icon={<MapPin className="text-primary dark:text-secondary text-lg" />}
              badgeText="Belgium"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-14 w-[150px] h-[50px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-md"
              icon={<MapPin className="text-primary dark:text-secondary text-lg" />}
              badgeText="Spain"
            />
            <Badge
              containerStyles="absolute top-[70%] -right-14 w-[150px] h-[50px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-md"
              icon={<MapPin className="text-primary dark:text-secondary text-lg" />}
              badgeText="Canada"
            />
            <Badge
              containerStyles="absolute top-[85%] -right-14 w-[150px] h-[50px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-md"
              icon={<MapPinnedIcon className="text-primary dark:text-secondary text-lg" />}
              badgeText="USA"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom pl-20"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>

        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};


export default Hero;

'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiMediumFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  // {
  //   path: '/',
  //   name: <RiYoutubeFill />,
  // },
  {
    path: 'https://www.linkedin.com/in/ismailsharieff/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/mohammsh',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/mohammsh',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://medium.com/@rushabhm75',
    name: <RiMediumFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

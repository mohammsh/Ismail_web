'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/Togaf9.png',
    name: 'TOGAF 9: The Open Group Certifications',
    job: 'TOGAF',
    review:
      'The Open Group Certified: TOGAF® 9 Certified',
    link:'https://www.credly.com/badges/f5fe3fa0-be5f-4b55-b973-b420d8092eab/linked_in_profile'
  },
  {
    avatar: '/reviews/CEH_2E345519D3F7.png',
    name: 'Certified Ethical Hacker v7 & v10',
    job: 'ECCouncil',
    review:
      'Reconnaissance, Gaining Access, Enumeration, Maintaining Access, and covering your tracks',
    link:'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=rP0CjWwXLCUNehyWH3vnA9KWOsg2zSEcEu8ZuLmVP1E='
  },
  {
    avatar: '/reviews/ScaledAgile.png',
    name: 'SAFe 4 Practitioner',
    job: 'Scaled Agile Inc',
    review:
      'A Certified SAFe 4 Practitioner (SP)',
      link:'https://www.credly.com/badges/eefbb136-78f4-4ef8-a47b-0e6966838d96'
  },
  {
    avatar: '/reviews/Nexpose_Adminstrator.png',
    name: 'Nexpose Certified Administrator',
    job: 'Rapid7',
    review:
      'Rapid7 primarily "InsightVM" (formerly Nexpose) scanning and administration',
      link:'https://www.youracclaim.com/badges/46fa7027-8128-4624-8d79-f12ca75e7e85/linked_in_profile'
  },
  // {
  //   avatar: '/reviews/avatar-4.png',
  //   name: 'Emily Smith',
  //   job: 'Therapist',
  //   review:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  //     link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  // },
  // {
  //   avatar: '/reviews/avatar-5.png',
  //   name: 'Oliver Taylor',
  //   job: 'Engineer',
  //   review:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  //     link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  // },
  // {
  //   avatar: '/reviews/avatar-6.png',
  //   name: 'Mason Wilson',
  //   job: 'Video Editor',
  //   review:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  //     link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  // },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Certifications</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                  <a href={person.link}>Click Here</a>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;

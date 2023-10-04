import React from 'react'
import { ser_1 } from '@/assets';
import Image from 'next/image';
import Slider from "react-slick";

const Service = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>
      <div className='bg-red-700 py-4'>
        <div className='container mx-auto flex flex-wrap justify-between items-center'>
            <h2 className='text-white lg:text-3xl uppercase'>WANT AN AFFORDABLE AND RELIABLE FABRICATION SERVICE?</h2>
            <a href='#' className='cursor-pointer bg-white px-12 py-4'>Contact Us</a>
        </div>
      </div>
      <div className='bg-blue-950 py-8'>
        <div className='relative text-center py-14'>
            <h2 className='uppercase text-4xl text-white font-bold'>ACUFAB SERVICES</h2>
            <h3 className='text-red-700 tracking-[0.6rem] uppercase'>Our secure and reliable fabrication work</h3>
            <h4 className='uppercase absolute top-0 text-center left-0 right-0 font-extrabold text-white/10 text-9xl'>SERVICES</h4>
        </div>
        <div className='container mx-auto'>
            <Slider {...settings}>
                <div className='w-full'>
                    <Image
                        src={ser_1}
                        width={400}
                        height={600}
                        alt="service 1"
                    />
                    <div className='content bg-white py-4 text-center px-3'>
                        <h2 className='text-center font-bold text-1xl'>Custom Steel Fabrication </h2>
                        <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus iste dolorem tempora velit aperiam illum mollitia, nesciunt perferendis quisquam accusamus ab sunt culpa dicta.</p>
                        <a href='#' className='bg-gray-200 py-2 hover:bg-red-700 hover:text-white table w-full'>Ream More</a>
                    </div>
                </div>
                <div className=' w-full '>
                    <Image
                        src={ser_1}
                        width={400}
                        height={600}
                        alt="service 1"
                    />
                    <div className='content bg-white py-4 text-center px-3'>
                        <h2 className='text-center font-bold text-1xl'>Custom Steel Fabrication </h2>
                        <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus iste dolorem tempora velit aperiam illum mollitia, nesciunt perferendis quisquam accusamus ab sunt culpa dicta.</p>
                        <a href='#' className='bg-gray-200 py-2 hover:bg-red-700 hover:text-white table w-full'>Ream More</a>
                    </div>
                </div>
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Service

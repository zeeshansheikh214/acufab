import React from "react";
import Image from "next/image";
import { headerlogo, test1 } from "@/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="team-container py-40">
      <div className="container mx-auto">
        <div className="sec-title mb-16">
          <h1 className="text-[#373E51] text-4xl uppercase text-center">
            our <span className="text-red-700">team</span>
          </h1>
          <hr className="bg-[#373E51] h-1 mx-auto w-14 my-2" />
        </div>
        <Slider {...settings}>
          <div className="testimonail-slider !flex justify-center items-center ">
            <div className="img-conteiner w-1/2 flex justify-center">
              <Image
                src={test1}
                width={400}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="content lg:text-left sm:text-center w-1/2 font-bold relative">
              <h2 className="absolute text-[7rem] uppercase font-extrabold text-black/5 -top-24 -left-8">
                about
              </h2>
              <h2 className="uppercase text-4xl">
                Mitchell <span className="text-red-700">Smith</span>
              </h2>
              <h3 className="uppercase tracking-[0.3rem] font-light text-red-700 mb-4">
                TEAM MEMBER
              </h3>
              <p className="font-normal max-w-[550px]">
                Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer Lorem Ipsum is simply dummyazca
                text of the printing and typesetting industry. printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="testimonail-slider !flex justify-center items-center ">
            <div className="img-conteiner w-1/2 flex justify-center">
              <Image
                src={test1}
                width={400}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="content lg:text-left sm:text-center w-1/2 font-bold relative">
              <h2 className="absolute text-[7rem] uppercase font-extrabold text-black/5 -top-24 -left-8">
                about
              </h2>
              <h2 className="uppercase text-4xl">
                Mitchell <span className="text-red-700">Smith</span>
              </h2>
              <h3 className="uppercase tracking-[0.3rem] font-light text-red-700 mb-4">
                TEAM MEMBER
              </h3>
              <p className="font-normal max-w-[550px]">
                Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer Lorem Ipsum is simply dummyazca
                text of the printing and typesetting industry. printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>  
        </Slider>
        
      </div>
    </div>
  );
};

export default Team;

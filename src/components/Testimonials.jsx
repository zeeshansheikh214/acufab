import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ser_1 } from "@/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
    <div className="container mx-auto pt-40 pb-20">
      <div className="content text-center  font-bold relative pb-20">
        <h2 className="absolute text-[9rem] uppercase font-extrabold text-black/10 -top-24 -left-0 right-0">
          TESTIMONIALS
        </h2>
        <h2 className="uppercase text-4xl text-black">
          WHAT CLIENT <span className="text-red-700">SAYS</span>
        </h2>
        <h3 className="uppercase tracking-[0.7rem] font-light text-red-700 mb-4">
          ACUFAB METAL FABRICATION
        </h3>
      </div>
      <Slider {...settings}>
        <div className="testimonail-slider !flex justify-center items-center ">
          <div className="img-conteiner w-1/2 flex justify-center">
            <Image
              src={ser_1}
              width={400}
              height={600}
              alt="Picture of the author"
            />
          </div>
          <div className="content lg:text-left sm:text-center w-1/2 font-bold relative">
            <p className="font-normal max-w-[550px]">
              Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer Lorem Ipsum is simply dummyazca text of
              the printing and typesetting industry. printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>

            <h2 className="uppercase text-4xl">Ann & Mike Reynolds</h2>
            <h3 className="uppercase tracking-[0.3rem] font-light text-red-700 mb-4">
              GAMER
            </h3>
          </div>
        </div>
        <div className="testimonail-slider !flex justify-center items-center ">
          <div className="img-conteiner w-1/2 flex justify-center">
            <Image
              src={ser_1}
              width={400}
              height={600}
              alt="Picture of the author"
            />
          </div>
          <div className="content lg:text-left sm:text-center w-1/2 font-bold relative">
            <p className="font-normal max-w-[550px]">
              Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer Lorem Ipsum is simply dummyazca text of
              the printing and typesetting industry. printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>

            <h2 className="uppercase text-4xl">Ann & Mike Reynolds</h2>
            <h3 className="uppercase tracking-[0.3rem] font-light text-red-700 mb-4">
              GAMER
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;

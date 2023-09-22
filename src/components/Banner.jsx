import React from "react";

const Banner = () => {
  return (
    <div className="banner bg-img h-[80vh] z-10 flex flex-nowrap items-center  justify-center ">
      <div className="bg-black/60 h-[80vh] absolute w-full z-0"></div>
      <div className="container mx-auto text-center z-10 ">
        <div className="content mx-auto w-full relative">
          <h1 className="text-white font-bold text-3xl sm:text-5xl lg:text-7xl uppercase">WELDING & IRON WORKS</h1>
          <h2 className="text-white uppercase text-xl sm:text-2xl ">
            WE BUILD <span className="text-red-700"> THE BEST</span>
          </h2>
          <div className='absolute left-0 right-0 sm:max-w-[80%] sm:bottom[-60%] mx-auto z-20'>
            <div className='grid grid-cols-3 gap-0'>
            <div className='banner-steps grid-cols-3 bg-[#373E51] py-8 text-center'>
              <h2 className='text-7xl text-red-700 font-bold'>01</h2>
              <p className='text-red-700 uppercase'>Give us a call</p>
              <p className='text-white capitalize'>Your official source for 24/7 Metal support</p>
            </div>
            <div className='banner-steps grid-cols-3 bg-[#373E51] py-8 text-center'>
              <h2 className='text-7xl text-red-700 font-bold'>01</h2>
              <p className='text-red-700 uppercase'>Give us a call</p>
              <p className='text-white capitalize'>Your official source for 24/7 Metal support</p>
            </div>
            <div className='banner-steps grid-cols-3 bg-[#373E51] py-8 text-center'>
              <h2 className='text-7xl text-red-700 font-bold'>01</h2>
              <p className='text-red-700 uppercase'>Give us a call</p>
              <p className='text-white capitalize'>Your official source for 24/7 Metal support</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

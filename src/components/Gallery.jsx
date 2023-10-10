import Image from "next/image";
import {
  fourth_gallary_1,
  fourth_gallary_2,
  fourth_gallary_3,
  fourth_gallary_4,
  fourth_gallary_5,
  fourth_gallary_6,
  roofing1,
  roofing2,
  roofing3,
  second_gallery_1,
  second_gallery_2,
  second_gallery_3,
  third_gallery_1,
  third_gallery_2,
  third_gallery_3,
  third_gallery_4,
  third_gallery_5,
} from "@/assets";
import Slider from "react-slick";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Gallery = () => {

  const myarr = [
    {
      name: "Roofing",
      img1: roofing1,
      img: [roofing2, roofing3],
    },
    {
      name: "second gallery",
      img1: second_gallery_1,
      img: [second_gallery_2, second_gallery_3],
    },
    {
      name: "third gallery",
      img1: third_gallery_1,
      img: [third_gallery_2, third_gallery_3, third_gallery_4, third_gallery_5],
    },
    {
      name: "fourth gallary",
      img1: fourth_gallary_1,
      img: [
        fourth_gallary_2,
        fourth_gallary_3,
        fourth_gallary_4,
        fourth_gallary_5,
        fourth_gallary_6,
      ],
    },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  let [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomedInImage, setZoomedInImage] = useState(null);
  function closeModal() {
    setIsOpen(false);
    setSelectedIndex(null);
    setZoomedInImage(null);
  }
  

  function openModal(index) {
    setIsOpen(true);
    setSelectedIndex(index);

    
  }
  function openModal2(index) {
    setZoomedInImage(index);
  }
  return (
    <div>
      <div className="pt-8 pb-24">
        <div className="relative text-center py-14">
          <h2 className="uppercase text-4xl text-[#373E51]  font-bold">
            Our <span className="text-red-700">Gallery</span>
          </h2>
          <h3 className="text-red-700 tracking-[0.6rem] uppercase">
            ACUFAB METAL FABRICATION
          </h3>
          <h4 className="uppercase absolute top-0 text-center left-0 right-0 font-extrabold text-black/5 text-9xl">
            GALLERY
          </h4>
        </div>
        <div className="container mx-auto ser-slider">
          <Slider {...settings}>
            {myarr.map((index, key) => {
              return (
                <div className="max-w-[400px] relative">
                  <Image
                    src={index.img1}
                    width={400}
                    height={600}
                    alt="service 1"
                  />
                  <div className="content py-4 text-center px-3 absolute bottom-0 left-0 right-0">
                    <button type="button" onClick={() => openModal(index)} className="inline-flex justify-center px-4 py-2 text-sm text-white bg-red-700 border border-transparent rounded-md hover:bg-red-500 duration-300">
                      {index.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {selectedIndex && 
     
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">
                  <div className="mt-2">
                  
                    <h2 className="py-2 uppercase text-white bg-red-700 text-center">
                    {selectedIndex.name}
                    </h2>
                    
                  </div>
                  <div className="py-2"></div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-2">
                  {
                    selectedIndex.img.map((item,index)=>{
                      return(
                        <div className="flex cursor-pointer" key={index}  onClick={()=>openModal2(item)}>
                            <Image src={item}/>
                        </div>
                      )
                    })
                  }
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className=" inline-flex justify-center px-4 py-2 text-sm text-white bg-red-700 border border-transparent rounded-md hover:bg-red-500 duration-300"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
              {zoomedInImage && 
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
                  <div className="py-2"></div>
                    <div className="grid sm:grid-cols-1">
                        <div className="flex cursor-pointer">
                          
                            <Image src={zoomedInImage}/>
                        </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className=" inline-flex justify-center px-4 py-2 text-sm text-white bg-red-700 border border-transparent rounded-md hover:bg-red-500 duration-300"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
              }
            </div>
          </Dialog>
        </Transition>
}
    </div>
  );
};

export default Gallery;

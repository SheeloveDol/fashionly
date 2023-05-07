import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Slide1 from "../../assets/sammie-chaffin-RmO3If0EYHM-unsplash.jpg"
import Slide2 from "../../assets/alexander-andrews-C-Cirku0Ei0-unsplash.jpg"
import Slide3 from "../../assets/brian-wangenheim-CIfJMx4qKRY-unsplash.jpg"
import Slide4 from "../../assets/brooke-cagle-hHcHf4mOFgk-unsplash.jpg"
import Slide5 from "../../assets/clem-onojeghuo-Jy992J_7GUs-unsplash.jpg"

import { Navigation } from "swiper";


const MainCarousel = () => {

    const imagesArray = [Slide1, Slide2, Slide3, Slide4, Slide5]

  return (
    <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        
    >
        {
            imagesArray.map((image, index) => (
                <div key={index}>
                    <img 
                        className='object-cover bg-fixed h-[450px]'
                        src={image}
                        alt={`model-${index}`}
                    />

                    <div className="text-white p-[20px] rounded-md text-left bg-black/[.40] absolute top-1/2 left-0 sm:left-[10%]  right-0 sm:right-auto max-w-[240px] sm:max-w-none">
                        <p className='text-xs text-red-300'>NEW ITEMS</p>
                        <p className='text-2xl'>SUMMER SALE</p>
                        <p className='text-xs font-bold underline text-red-500'>Discover More</p>
                    </div>
                </div>
            ))
        }
        
    </Carousel>
  )
};

export default MainCarousel







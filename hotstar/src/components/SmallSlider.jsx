import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/1.webp';
import image2 from '../images/2.webp';
import image3 from '../images/3.webp';
import image4 from '../images/4.webp';
import image5 from '../images/5.webp';
import image6 from '../images/6.webp';
import image7 from '../images/7.webp';

const SmallSlider = () => {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1,
      };
    return (
      <div className="slider-container flex flex-col relative pr-9  z-10 rounded-md  gap-2 w-96 bottom-40 left-96" >
        <Slider {...settings}>
         <div >
         <img src={image1} className="h-20 w-28 hover:scale-110 transition opacity-80 hover:opacity-100  duration-300 " />
         </div>
         <div >
         <img src={image2} className="h-20 w-28 hover:scale-110 transition opacity-60 hover:opacity-100 duration-300 " />
         </div>
         <div>
         <img src={image3} className="h-20 w-28 hover:scale-110 transition opacity-60 hover:opacity-100 duration-300 " />
         </div>
         <div>
         <img src={image4} className="h-20 w-28 hover:scale-110 transition opacity-60 hover:opacity-100 duration-300 " />
         </div>
         <div>
         <img src={image5} className="h-20 w-28 hover:scale-110 transition opacity-60 hover:opacity-100 duration-300 " />
         </div>
         <div>
         <img src={image6} className="h-20 w-28 hover:scale-110 transition opacity-60 hover:opacity-100 duration-300 " />
         </div>
         <div>
         <img src={image7} className="h-20 w-28 hover:scale-110 transition opacity-60 hover:opacity-100 duration-300 " />
         </div>
        
        </Slider>
      </div>
    );
  }

export default SmallSlider;
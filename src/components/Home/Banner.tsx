"use client";

import Image from "next/image";
import Slider from "react-slick";
import images from "@/assets/images";
import { banner, bannerMobile } from "@/constants/banner";

const ArrowPrev = ({ currentSlide, slideCount, onClick }: any) => {
  return (
    <div
      className="slider-arrow-left absolute top-[50%] translate-y-[-50%] left-[46px] items-center justify-center cursor-pointer z-9 w-[48px] h-[48px] rounded-full bg-[hsla(0,0%,100%,.1)] border border-[hsla(0,0%,100%,.1)]"
      onClick={onClick}
    >
      <Image src={images.ArrowLeftImage} className="w-[24px] h-[24px]" alt="" />
    </div>
  );
};

const ArrowNext = ({ currentSlide, slideCount, onClick }: any) => {
  return (
    <div
      className="slider-arrow-right absolute top-[50%] translate-y-[-50%] right-[46px] items-center justify-center cursor-pointer z-9 w-[48px] h-[48px] rounded-full bg-[hsla(0,0%,100%,.1)] border border-[hsla(0,0%,100%,.1)]"
      onClick={onClick}
    >
      <Image
        src={images.ArrowRightImage}
        className="w-[24px] h-[24px]"
        alt=""
      />
    </div>
  );
};

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
  };

  const settings2 = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
  };

  return (
    <div className="relative">
      <Slider {...settings} className="hidden lg:block slider-wrapper">
        {banner.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            className="cursor-pointer"
            alt=""
          />
        ))}
      </Slider>
      <div className="hidden lg:block h-[120px] absolute bottom-0 left-0 w-full z-9 slider-bottom-overlay"></div>
      <div className="slider-container">
        <Slider {...settings2} className="lg:hidden mt-20">
          {bannerMobile.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt=""
              className="w-full rounded-xl"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;

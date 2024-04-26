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
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    nextArrow: <></>,
    prevArrow: <></>,
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
      <div className="relative">
        <div className="absolute lg:hidden w-full top-[-102px] left-0 right-0 h-[320px] sm:h-[640px]">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-055"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-slider"></div>
        </div>
        <div className="slider-container">
          <Slider {...settings2} className="lg:hidden mt-[104px]">
            {bannerMobile.map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <div className="mr-4 md:h-[688px] sm:h-[522px] h-[255px] banner-mobile-item">
                  <Image
                    src={item.image}
                    alt=""
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Banner;

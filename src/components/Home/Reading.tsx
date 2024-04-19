"use client";

import Image from "next/image";
import Slider from "react-slick";
import BookItem from "@/components/Home/BookItem";
import { reading } from "@/constants/reading";
import images from "@/assets/images";

const ArrowPrev = ({ currentSlide, slideCount, onClick }: any) => {
  return (
    <>
      {currentSlide && currentSlide > 0 ? (
        <div
          className="book-item-arrow-left items-center justify-center cursor-pointer z-10 w-[48px] h-[48px] rounded-full bg-[hsla(0,0%,100%,.1)] border border-[hsla(0,0%,100%,.1)]"
          onClick={onClick}
        >
          <Image
            src={images.ArrowLeftImage}
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const ArrowNext = ({ currentSlide, slideCount, onClick }: any) => {
  return (
    <>
      {slideCount && currentSlide < slideCount - 5 ? (
        <div
          className="book-item-arrow-right items-center justify-center cursor-pointer z-10 w-[48px] h-[48px] rounded-full bg-[hsla(0,0%,100%,.1)] border border-[hsla(0,0%,100%,.1)]"
          onClick={onClick}
        >
          <Image
            src={images.ArrowRightImage}
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

function Reading() {
  var settings = {
    dots: false,
    infinite: false,
    scroll: false,
    speed: 500,
    slidesToShow: 5.5,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
  };

  return (
    <div className="bg-background mt-[60px] container-block">
      <p className="font-medium text-[26px] leading-[33px] text-white-50">
        Tiếp tục cho Phung Thuy{" "}
      </p>
      <div className="mt-5">
        <Slider {...settings} className="book-wrapper">
          {reading.map((item, index) => (
            <BookItem key={index} item={item} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reading;

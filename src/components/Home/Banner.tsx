"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect } from "react";
import images from "@/assets/images";
import { navigation } from "@/constants/navigation";
import { banner } from "@/constants/banner";

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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
  };

  const handleScroll = () => {
    const header = document.querySelector(".header");

    if (header) {
      if (window.scrollY > 30) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    }
  };

  const seeMore = () => {
    const seeMoreModal = document.querySelector(".see-more-modal");

    if (seeMoreModal) {
      seeMoreModal.classList.toggle("hide");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <header className="header bg-gradient-overlay py-[11px] fixed z-10 top-0 left-0 bg-[rgba(18,18,20,.8)] w-full">
        <div className="w-full px-[60px]">
          <div className="flex justify-between w-full">
            <div className="flex gap-[48px]">
              <Link href={"/"} className="py-2.5">
                <Image
                  src={images.LogoImage}
                  alt=""
                  className="h-[32px] w-[108px"
                />
              </Link>
              <ul className="flex items-center flex-wrap gap-x-[24px]">
                {navigation.map((item, index) => {
                  if (index > 4) {
                    return;
                  }

                  return (
                    <li
                      className="text-[16px] py-2.5 font-medium text-second leading-[20px] cursor-pointer hover:text-primary"
                      key={index}
                    >
                      <a href="#" className="inline-block">
                        {item}
                      </a>
                    </li>
                  );
                })}
                <div className="relative">
                  <li
                    className="text-[16px] py-2.5 font-medium text-second leading-[20px] cursor-pointer hover:text-primary"
                    onClick={seeMore}
                  >
                    Xem thêm
                  </li>
                  <div className="see-more-modal hide absolute top-[26px] left-0 p-4 border border-white-overlay rounded-xl bg-dark-overlay max-w-[200px] min-w-[188px]">
                    <ul>
                      {navigation.map((item, index) => {
                        if (index < 5) {
                          return;
                        }

                        return (
                          <li
                            className="text-[15px] font-normal text-second leading-[20px] p-[8px] rounded-xl cursor-pointer hover:text-primary hover:bg-white-overlay block w-full"
                            key={index}
                          >
                            <a href="#" className="inline-block">
                              {item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
            <div className="flex items-center h-fit gap-[24px]">
              <Image
                src={images.SearchImage}
                alt=""
                className="h-[24px] w-[24px] cursor-pointer"
              />
              <div className="flex items-center h-[32px] min-w-[96px] rounded-2xl border border-comic-500 gap-[3px] py-[4px] px-[10px] bg-[rgba(255,204,0,.16)] cursor-pointer">
                <Image
                  src={images.SubtractImage}
                  alt=""
                  className="w-[16px] h-[16px]"
                />
                <p className="font-normal text-[13px] leading-[16.6px] text-comic">
                  Gói cước
                </p>
              </div>
              <Image
                src={images.BellImage}
                alt=""
                className="h-[24px] w-[24px] cursor-pointer"
              />
              <div className="flex items-center gap-[8px] cursor-pointer">
                <div className="flex items-center justify-center w-[42px] h-[42px] min-w-[42px] bg-gradient-to-r from-[#FB3A1A] to-[#EBB004] rounded-full p-[1px]">
                  <div className="flex items-center justify-center h-full w-full rounded-full">
                    <Image
                      src={images.AvatarImage}
                      alt=""
                      className="block object-cover h-[34px] w-[34px] rounded-full"
                    />
                  </div>
                </div>
                <Image src={images.ArrowDownImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Slider {...settings} className="slider-wrapper">
        {banner.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            className="cursor-pointer"
            alt=""
          />
        ))}
      </Slider>
      <div className="h-[120px] absolute bottom-0 left-0 w-full z-9 slider-bottom-overlay"></div>
    </div>
  );
}

export default Banner;

"use client";

import Image from "next/image";
import Slider from "react-slick";
import { v4 as uuIdV4 } from "uuid";
import TagFlash from "@/assets/images/tag-flash.svg";
import { settings } from "@/constants/settings";
import { forYou } from "@/constants/for-you";
import BookItem from "@/components/Home/BookItem";

const BuyBook = () => {
  return (
    <div className="bg-background container-block">
      <h2 className="font-medium text-[18px] lg:text-[26px] leading-[33px] text-white lg:text-white-50">
        Mua sách lẻ
      </h2>
      <div className="flex flex-wrap items-center gap-6 my-2 lg:my-5">
        <div className="flex items-center">
          <Image
            src={TagFlash}
            width={16}
            height={16}
            alt=""
            className="mr-1"
          />
          <p className="font-medium text-[19px] leading-6 text-FM/500 tracking-[0.5] cursor-pointer">
            Flash sale hôm nay
          </p>
        </div>
        <p className="font-medium text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer">
          Tất cả
        </p>
      </div>
      <Slider {...settings} className="book-wrapper">
        {forYou.map((item, index) => (
          <BookItem key={uuIdV4()} item={item} index={index} tag="tag-sale" />
        ))}
      </Slider>
    </div>
  );
};

export default BuyBook;

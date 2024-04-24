"use client";

import Slider from "react-slick";
import { twMerge } from "tailwind-merge";
import { v4 as uuIdV4 } from "uuid";
import { ranking } from "@/constants/ranking";
import BookItem from "@/components/Home/BookItem";
import { settings } from "@/constants/settings";

const Ranking = () => {
  const active = false;

  return (
    <div className="bg-background container-block">
      <h2 className="font-medium text-[26px] leading-[33px] text-white-50">
        Bảng xếp hạng
      </h2>
      <div className="flex flex-wrap items-center gap-6 my-5">
        <p
          className={twMerge(
            `font-light text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer`,
            active && "text-primary"
          )}
        >
          Đọc nhiều
        </p>
        <p
          className={twMerge(
            `font-light text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer`,
            active && "text-primary"
          )}
        >
          Nghe nhiều
        </p>
        <p
          className={twMerge(
            `font-light text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer`,
            active && "text-primary"
          )}
        >
          Sách Hiệu Sồi
        </p>
        <p
          className={twMerge(
            `font-light text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer`,
            active && "text-primary"
          )}
        >
          Truyện tranh
        </p>
        <p
          className={twMerge(
            `font-light text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer`,
            active && "text-primary"
          )}
        >
          Podcast
        </p>
        <p
          className={twMerge(
            `font-light text-[15px] leading-6 text-black/600 tracking-[0.5] hover:text-[#999] cursor-pointer`,
            active && "text-primary"
          )}
        >
          Cộng đồng viết
        </p>
      </div>
      <div>
        <Slider {...settings} className="book-wrapper">
          {ranking.map((item, index) => (
            <BookItem
              key={uuIdV4()}
              item={item}
              index={index}
              tag="tag-member"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ranking;

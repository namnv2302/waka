"use client";

import Slider from "react-slick";
import { v4 as uuIdV4 } from "uuid";
import { settings } from "@/constants/settings";
import { comboBook } from "@/constants/combo-book";
import ComboBookItem from "@/components/Home/ComboBookItem";

const ComboBook = () => {
  return (
    <div className="bg-background container-block">
      <h2 className="font-medium text-[26px] leading-[33px] text-white-50">
        Combo sách
      </h2>
      <div className="mt-5">
        <Slider {...settings} className="book-wrapper">
          {comboBook.map((item) => (
            <ComboBookItem key={uuIdV4()} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ComboBook;

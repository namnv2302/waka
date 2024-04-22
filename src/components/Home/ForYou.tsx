"use client";

import Slider from "react-slick";
import { v4 as uuIdV4 } from "uuid";
import Carousel from "@/components/Carousel";
import { forYou } from "@/constants/for-you";
import BookItem from "@/components/Home/BookItem";
import { settings } from "@/constants/settings";

const ForYou = () => {
  return (
    <Carousel title="Dành riêng cho bạn">
      <Slider {...settings} className="book-wrapper">
        {forYou.map((item, index) => (
          <BookItem key={uuIdV4()} item={item} index={index} tag="tag-member" />
        ))}
      </Slider>
    </Carousel>
  );
};

export default ForYou;

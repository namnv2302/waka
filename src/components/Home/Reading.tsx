"use client";

import { v4 as uuIdV4 } from "uuid";
import Slider from "react-slick";
import { reading } from "@/constants/reading";
import Carousel from "@/components/Carousel";
import BookItem from "@/components/Home/BookItem";
import { settings } from "@/constants/settings";

function Reading() {
  return (
    <Carousel title="Tiếp tục cho Phung Thuy">
      <Slider {...settings} className="book-wrapper">
        {reading.map((item, index) => (
          <BookItem key={uuIdV4()} item={item} index={index} />
        ))}
      </Slider>
    </Carousel>
  );
}

export default Reading;

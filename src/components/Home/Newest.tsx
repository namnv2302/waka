"use client";

import Slider from "react-slick";
import { v4 as uuIdV4 } from "uuid";
import Carousel from "@/components/Carousel";
import { settings } from "@/constants/settings";
import { newest } from "@/constants/newest";
import BookItem from "@/components/Home/BookItem";

const Newest = () => {
  return (
    <Carousel title="Mới nhất">
      <Slider {...settings} className="book-wrapper">
        {newest.map((item, index) => (
          <BookItem key={uuIdV4()} item={item} index={index} tag="tag-member" />
        ))}
      </Slider>
    </Carousel>
  );
};

export default Newest;

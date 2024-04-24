"use client";

import Slider from "react-slick";
import { v4 as uuIdV4 } from "uuid";
import { settings } from "@/constants/settings";
import PodcastItem from "@/components/Home/PodcastItem";
import { podcast } from "@/constants/podcast";

const Podcast = () => {
  return (
    <div className="bg-background container-block">
      <h2 className="font-medium text-[26px] leading-[33px] text-white-50">
        Podcast đặc sắc
      </h2>
      <div className="mt-5">
        <Slider {...settings} className="book-wrapper">
          {podcast.map((item, index) => (
            <PodcastItem key={uuIdV4()} item={item} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Podcast;

"use client";

import Slider from "react-slick";
import { v4 as uuIdV4 } from "uuid";
import dynamic from "next/dynamic";
import { settings } from "@/constants/settings";
import { podcast } from "@/constants/podcast";

const PodcastItem = dynamic(() => import("@/components/Home/PodcastItem"), {
  ssr: false,
});

const Podcast = () => {
  return (
    <div className="bg-background container-block">
      <h2 className="font-medium text-[18px] lg:text-[26px] leading-[33px] text-white lg:text-white-50">
        Podcast đặc sắc
      </h2>
      <div className="mt-2 lg:mt-5">
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

"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuIdV4 } from "uuid";
import Carousel from "@/components/Carousel";
import { ArrowNext, ArrowPrev, settings } from "@/constants/settings";
import { latestNews } from "@/constants/latest-news";

const LatestNews = () => {
  return (
    <Carousel title="Tin mới nhất">
      <Slider
        {...settings}
        slidesToShow={3.4}
        slidesToScroll={3}
        nextArrow={<ArrowNext slideNumber={3} />}
        prevArrow={<ArrowPrev slideNumber={3} />}
        className="book-wrapper"
      >
        {latestNews.map((item) => (
          <div key={uuIdV4()}>
            <Link href={"/"} className="flex flex-col gap-4 w-[390px]">
              <div className="w-full rounded-xl overflow-hidden zoom-out">
                <Image
                  src={item.image}
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p className="font-medium text-[16px] text-second line-clamp-2 hover:text-primary">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </Slider>
    </Carousel>
  );
};

export default LatestNews;

"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuIdV4 } from "uuid";
import Carousel from "@/components/Carousel";
import { settings } from "@/constants/settings";
import { selectedCollection } from "@/constants/selected-collection";
import { ArrowNext, ArrowPrev } from "@/constants/settings";

const SelectedCollection = () => {
  return (
    <Carousel title="Tuyển tập chọn lọc">
      <Slider
        {...settings}
        slidesToShow={2.4}
        slidesToScroll={2}
        nextArrow={<ArrowNext slideNumber={2} />}
        prevArrow={<ArrowPrev slideNumber={2} />}
        responsive={[
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
        ]}
        className="book-wrapper"
      >
        {selectedCollection.map((item) => (
          <div key={uuIdV4()}>
            <Link
              href={"/"}
              className="flex flex-col lg:gap-4 gap-2 w-auto mr-2 lg:w-auto lg:mr-10"
            >
              <div className="w-full rounded-xl overflow-hidden zoom-out">
                <Image
                  src={item.image}
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p className="font-medium text-[14px] lg:text-[16px] text-second line-clamp-1 hover:text-primary">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </Slider>
    </Carousel>
  );
};

export default SelectedCollection;

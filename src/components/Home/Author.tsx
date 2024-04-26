"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuIdV4 } from "uuid";
import Carousel from "@/components/Carousel";
import { settings } from "@/constants/settings";
import { author } from "@/constants/author";

const Author = () => {
  return (
    <Carousel title="Tác giả nổi bật">
      <Slider {...settings} className="book-wrapper">
        {author.map((item) => (
          <div key={uuIdV4()}>
            <Link
              href={"/"}
              className="inline-flex flex-col w-full gap-4 xl:w-56 lg:w-52"
            >
              <div className="w-full xl:h-56 lg:h-52 rounded-full overflow-hidden zoom-out">
                <Image
                  src={item.image}
                  alt=""
                  className="block w-full h-full object-cover"
                />
              </div>
              <p className="lg:font-medium font-normal text-[14px] lg:text-[16px] text-white-50 text-center hover:text-primary">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </Slider>
    </Carousel>
  );
};

export default Author;

import Image from "next/image";
import images from "@/assets/images";

export const ArrowPrev = ({ currentSlide, slideCount, onClick }: any) => {
  return (
    <>
      {currentSlide && currentSlide > 0 && slideCount > 5 ? (
        <div
          className="book-item-arrow-left items-center justify-center cursor-pointer z-10 w-[48px] h-[48px] rounded-full bg-[hsla(0,0%,100%,.1)] border border-[hsla(0,0%,100%,.1)]"
          onClick={onClick}
        >
          <Image
            src={images.ArrowLeftImage}
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export const ArrowNext = ({ currentSlide, slideCount, onClick }: any) => {
  return (
    <>
      {slideCount && currentSlide < slideCount - 5 && slideCount > 5 ? (
        <div
          className="book-item-arrow-right items-center justify-center cursor-pointer z-10 w-[48px] h-[48px] rounded-full bg-[hsla(0,0%,100%,.1)] border border-[hsla(0,0%,100%,.1)]"
          onClick={onClick}
        >
          <Image
            src={images.ArrowRightImage}
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export const settings = {
  dots: false,
  infinite: false,
  scroll: false,
  speed: 500,
  slidesToShow: 5.5,
  slidesToScroll: 5,
  prevArrow: <ArrowPrev />,
  nextArrow: <ArrowNext />,
};

import Image from "next/image";
import Link from "next/link";
import DiscountImage from "@/assets/images/discount.svg";

interface ComboBookItemProps {
  item: any;
}

const ComboBookItem: React.FC<ComboBookItemProps> = ({ item }) => {
  return (
    <div className="xl:w-56 lg:w-52 mt-4 mr-2 lg:mr-0">
      <Link href={"/"} className="inline-block w-full">
        <div className="relative rounded-xl">
          <div className="w-full rounded-xl overflow-hidden zoom-out">
            <Image src={item.image} alt="" className="w-full" />
          </div>
          <div className="absolute top-0 right-0 translate-x-[20%] -translate-y-[20%] lg:translate-x-[30%] lg:-translate-y-[30%]">
            <Image
              src={DiscountImage}
              alt=""
              className="w-[34px] h-[34px] lg:w-auto lg:h-auto"
            />
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-bold text-[11px] lg:text-[13px] leading-3 lg:leading-4 text-comic/900">
              -{item.discount}%
            </p>
          </div>
        </div>
        <p className="lg:font-medium font-normal lg:text-[16px] text-[14px] leading-4 lg:leading-5 text-white-50 lg:mt-4 mt-2 h-8 lg:h-10 line-clamp-2 hover:text-primary">
          {item.title}
        </p>
        <div className="hidden lg:flex items-center justify-between pt-2.5">
          <p className="font-normal text-sm text-[#999999]">
            <span className="line-through">{item.price}</span>
            <span className="underline ml-1">đ</span>
          </p>
          <p className="font-medium text-[16px] text-second">
            <span>{item.price}</span>
            <span className="underline ml-1">đ</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ComboBookItem;

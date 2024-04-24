import Image from "next/image";
import Link from "next/link";
import DiscountImage from "@/assets/images/discount.svg";

interface ComboBookItemProps {
  item: any;
}

const ComboBookItem: React.FC<ComboBookItemProps> = ({ item }) => {
  return (
    <div className="w-[84%] mt-4">
      <Link href={"/"} className="inline-block">
        <div className="relative rounded-xl">
          <div className="w-full rounded-xl overflow-hidden zoom-out">
            <Image src={item.image} alt="" className="w-full" />
          </div>
          <div className="absolute top-0 right-0 translate-x-[30%] -translate-y-[30%]">
            <Image src={DiscountImage} alt="" />
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-bold text-[13px] leading-4 text-comic/900">
              -{item.discount}%
            </p>
          </div>
        </div>
        <p className="font-medium text-[16px] leading-5 text-white-50 mt-4 h-10 line-clamp-2 hover:text-primary">
          {item.title}
        </p>
        <div className="flex items-center justify-between pt-2.5">
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

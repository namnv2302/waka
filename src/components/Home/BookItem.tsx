import Image from "next/image";
import { twMerge } from "tailwind-merge";
import images from "@/assets/images";

interface BookItemProps {
  item: any;
  index: number;
  tag?: string;
}

const BookItem: React.FC<BookItemProps> = ({ item, index, tag }) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer w-[82%]">
      <div className="relative w-full rounded-[12px] book-item-wrapper">
        <Image
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-[12px]"
        />
        <div className="book-item-overlay"></div>
        <div
          className={`book-item-modal absolute top-0 ${
            index !== 0 && (index % 4 === 0 || index % 5 === 0)
              ? "right-0"
              : "left-0"
          } bottom-0 flex min-w-[732px] p-4 rounded-[12px] gap-6 border border-white-overlay z-20`}
        >
          <div
            className={`relative rounded-[12px] h-full w-[200px] ${
              index !== 0 && (index % 4 === 0 || index % 5 === 0)
                ? "order-1"
                : false
            }`}
          >
            <Image
              src={item.image}
              alt=""
              className="object-cover rounded-[12px] h-full w-full"
            />
            <div className="book-item-overlay"></div>
          </div>
          <div
            className={`flex-1 flex flex-col gap-4 ${
              index !== 0 && (index % 4 === 0 || index % 5 === 0)
                ? "order-0"
                : false
            }`}
          >
            <p className="font-medium text-[26px] leading-8 text-white">
              Đôi lời chia sẻ
            </p>
            <p className="font-medium text-[16px] leading-5 text-second">
              Trần Nguyễn - Duy Anh
            </p>
            <div className="gap-6 flex items-center">
              <p className="font-medium text-[16px] leading-5 text-primary">
                Miễn phí
              </p>
              <div className="inline-flex items-center gap-2 py-3 px-4 rounded-[99px] h-12 bg-primary">
                <Image src={images.BellPlusImage} alt="" className="w-5 h-5" />
                <p className="font-normal text-[16px] leading-5 text-white">
                  Theo dõi
                </p>
              </div>
            </div>
            <p className="font-normal text-[15px] leading-5 text-white">
              Quản lý tài chính sau kết hôn là vấn đề vô cùng quan trọng đối với
              bất cứ gia đình nào. Để xây dựng được một tổ ấm vững chắc thì các
              thành viên trong gia đình, đặc biệt là người vợ - tay hòm chìa
              khóa, phải biết quản lý chi tiêu trong gia đình hợp lý. Có lẽ khi
              yêu, mọi thứ trong mắt đôi lứa ngọt ngào bala bala bala bala bala
              bala
            </p>
            <p className="font-normal text-[15px] text-primary leading-5">
              <a href="#">Chi tiết</a>
            </p>
          </div>
        </div>
        <div
          className={twMerge(
            `hidden absolute top-0 right-0 h-7 w-[120px] py-1 pl-3`,
            tag && "inline-block",
            tag
          )}
        >
          <p className="text-[16px] font-medium leading-5 text-white uppercase">
            Hội viên
          </p>
          <Image
            src={images.TagMemberImage}
            alt=""
            className="absolute top-0 right-0"
          />
        </div>
      </div>
      <p className="font-medium text-[16px] text-white-50 leading-[20px] hover:text-primary">
        <a href="#" className="block">
          {item.title}
        </a>
      </p>
    </div>
  );
};

export default BookItem;

import Image from "next/image";
import Link from "next/link";
import images from "@/assets/images";

interface PodcastItemProps {
  item: any;
  index: number;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ item, index }) => {
  return (
    <div className="xl:w-56 lg:w-52 mr-2 lg:mr-0">
      <Link href={"#"} className="flex flex-col gap-4">
        <div className="relative w-full podcast-item-wrapper">
          <div className="lg:rounded-xl rounded-[6px]  overflow-hidden">
            <Image
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute hidden lg:flex top-0 left-0 items-center bg-progress-overlay py-1 px-3 gap-1 rounded-tl-xl rounded-br-xl">
            <Image src={images.MusicImage} alt="" className="w-4 h-4" />
            <p className="font-normal text-[13px] leading-5 text-white">
              38,7K
            </p>
          </div>

          <div className="podcast-item-hover absolute bottom-0 left-0 flex p-4 gap-6 rounded-xl border border-white-overlay bg-dark-overlay min-w-[732px] h-full shadow-glass-box z-20">
            <div className="rounded-xl w-[191px] h-full overflow-hidden">
              <Image
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <p className="font-medium text-[24px] leading-8 text-white">
                Đôi lời chia sẻ
              </p>
              <p className="font-medium text-[16px] leading-5 text-second">
                Trần Nguyễn - Duy Anh
              </p>
              <div className="gap-6 flex items-center">
                <p className="font-medium text-[16px] leading-5 text-primary">
                  Miễn phí
                </p>
                <div className="inline-flex items-center gap-2 py-2 px-3 rounded-[99px] h-10 bg-primary">
                  <Image
                    src={images.BellPlusImage}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p className="font-normal text-[16px] leading-5 text-white">
                    Theo dõi
                  </p>
                </div>
              </div>
              <p className="font-normal text-[14px] leading-5 text-white line-clamp-2">
                Quản lý tài chính sau kết hôn là vấn đề vô cùng quan trọng đối
                với bất cứ gia đình nào. Để xây dựng được một tổ ấm vững chắc
                thì các thành viên trong gia đình, đặc biệt là người vợ - tay
                hòm chìa khóa, phải biết quản lý chi tiêu trong gia đình hợp lý.
                Có lẽ khi yêu, mọi thứ trong mắt đôi lứa ngọt ngào bala bala
                bala bala bala bala
              </p>
              <p className="font-normal text-[15px] text-primary leading-5">
                <Link href="#">Chi tiết</Link>
              </p>
            </div>
          </div>
        </div>
        <p className="lg:font-medium font-normal text-[14px] lg:text-[16px] leading-5 text-second line-clamp-1 lg:line-clamp-2 hover:text-primary transition">
          {item.title}
        </p>
      </Link>
    </div>
  );
};

export default PodcastItem;

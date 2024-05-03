import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/assets/images/arrowRight.svg";
import EbookImage from "@/assets/images/ebook.png";
import Rectangle8040 from "@/assets/images/rectangle8040.png";
import VipImage from "@/assets/images/vip.png";
import StarSolid from "@/assets/images/star-solid.svg";
import Star from "@/assets/images/star.svg";
import RightPink from "@/assets/images/icon-right-pink.svg";
import IconBook from "@/assets/images/icon-book.svg";
import IconHeart from "@/assets/images/icon-heart.svg";
import IconShare from "@/assets/images/icon-share.svg";
import AvatarDefault from "@/assets/images/avatar.png";
import IconQuoteOpen from "@/assets/images/icon-quote-open.svg";
import IconQuoteClose from "@/assets/images/icon-quote-close.svg";
import Newest from "@/components/Home/Newest";
import ForYou from "@/components/Home/ForYou";
import Ranking from "@/components/Home/Ranking";

const EbookDetail = () => {
  return (
    <div className="min-h-[100vh] bg-background">
      <div className="pt-20 ebook-container">
        <div className="inline-flex items-center gap-1">
          <Link href={"/"} className="text-[13px] font-medium text-second">
            Trang chủ
          </Link>
          <Image src={ArrowRight} alt="" width={13} height={13} />
          <Link href={"/"} className="text-[13px] font-medium text-second">
            Kẻ khôn đi lối khác
          </Link>
        </div>
        <div className="flex justify-between mt-3 w-full">
          <div className="blur-layer-1 absolute top-[206px] right-1/2 z-0"></div>
          <div className="blur-layer-2 absolute -top-[98px] left-1/2 z-0"></div>
          <div className="sticky top-[12%] w-[400px] h-full mr-[60px] z-[1]">
            <div className="relative w-full rounded-xl">
              <Image
                src={EbookImage}
                alt=""
                className="w-full object-cover rounded-xl"
              />
              <div className="book-item-overlay"></div>
            </div>
            <div className=""></div>
          </div>
          <div className="w-[54%] mr-14 z-[1]">
            <div className="flex flex-col">
              <p className="font-medium text-[32px] leading-10 text-second">
                Truyện buồn chẳng có thật đâu (thật đấy)
              </p>
              <div className="flex items-end gap-6 mt-3">
                <div className="flex items-center gap-1">
                  <span className="font-normal text-[16px] leading-5 text-second">
                    4.0
                  </span>
                  <p className="flex items-center gap-[2px]">
                    <Image src={StarSolid} alt="" width={14} height={14} />
                    <Image src={StarSolid} alt="" width={14} height={14} />
                    <Image src={StarSolid} alt="" width={14} height={14} />
                    <Image src={StarSolid} alt="" width={14} height={14} />
                    <Image src={Star} alt="" width={16} height={16} />
                  </p>
                </div>
                <span className="font-normal text-[16px] leading-5 text-second">
                  ・306 đánh giá
                </span>
              </div>
              <div className="flex items-center rounded-[15px] bg-pink/950 p-2 mt-4 mb-5 max-w-fit gap-1">
                <div className="w-12 h-7.5 rounded-[15px] bg-pink/500 text-center">
                  <span className="font-medium text-[14px] leading-4 text-second">
                    #45
                  </span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <p className="font-normal text-[14px] leading-[17px] text-pink/500">
                    trong Top xu hướng Sách điện tử{" "}
                  </p>
                  <Image src={RightPink} alt="" width={16} height={16} />
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-8 border-b border-white-overlay pb-4">
                <div className="flex flex-col gap-1">
                  <p className="font-normal text-[16px] leading-5 text-[#999]">
                    Tác giả
                  </p>
                  <p className="font-normal text-[16px] leading-5 text-second">
                    S. H. Park, E. S. Kim
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-normal text-[16px] leading-5 text-[#999]">
                    Thể loại
                  </p>
                  <p className="font-normal text-[16px] leading-5 text-second">
                    Văn học truyện ngắn
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-normal text-[16px] leading-5 text-[#999]">
                    Nhà xuất bản
                  </p>
                  <p className="font-normal text-[16px] leading-5 text-second">
                    Dân Trí
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-normal text-[16px] leading-5 text-[#999]">
                    Gói cước
                  </p>
                  <p className="font-normal text-[16px] leading-5 text-second">
                    Hội viên, Mua lẻ sách
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-8">
              <div className="flex items-center gap-2">
                <span className="font-normal text-[16px] leading-5 text-[#999]">
                  Chọn loại sách
                </span>
                <div className="flex items-center rounded-[9px] p-0.5 bg-white-overlay cursor-pointer">
                  <div className="py-[3px] px-[10px] rounded-[7px] bg-white-overlay">
                    <span className="font-bold text-[14px] leading-4 text-second">
                      Sách điện tử
                    </span>
                  </div>
                  <div className="py-[3px] px-[10px] rounded-[7px]">
                    <span className="font-normal text-[14px] leading-4 text-second">
                      Sách nói
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-[16px] leading-5 text-[#999]">
                  Chọn nội dung
                </span>
                <div className="flex items-center rounded-[9px] p-0.5 bg-white-overlay cursor-pointer">
                  <div className="py-[3px] px-[10px] rounded-[7px] bg-white-overlay">
                    <span className="font-bold text-[14px] leading-4 text-second">
                      Đầy đủ
                    </span>
                  </div>
                  <div className="py-[3px] px-[10px] rounded-[7px]">
                    <span className="font-normal text-[14px] leading-4 text-second">
                      Tóm tắt
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[30px] mb-14">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[200px] py-3 px-4 rounded-[99px] gap-1.5 bg-primary">
                  <Image src={IconBook} alt="" width={24} height={24} />
                  <span className="font-normal text-[16px] leading-5 text-second">
                    Đọc sách
                  </span>
                </div>
                <div className="flex items-center justify-center min-w-[200px] py-3 px-4 rounded-[99px] gap-1.5 bg-white-overlay border border-white-overlay">
                  <Image src={IconBook} alt="" width={24} height={24} />
                  <span className="font-normal text-[16px] leading-5 text-second">
                    Nghe sách
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2 border border-white-overlay rounded-[99px] w-12 h-12 bg-white-overlay">
                  <Image src={IconHeart} alt="" width={24} height={24} />
                </div>
                <div className="flex items-center justify-center gap-2 border border-white-overlay rounded-[99px] w-12 h-12 bg-white-overlay">
                  <Image src={IconShare} alt="" width={24} height={24} />
                </div>
              </div>
            </div>
            <div>
              <p className="font-normal text-[16px] leading-6 text-justify text-second line-clamp-5">
                Tóm tắt sách thể hiện 5 dòng bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bala bala bala bala bala bala
                bala bala bala bala bala bala bala bal... Xem thêm{" "}
              </p>
            </div>
            <div className="flex flex-col mt-14">
              <p className="font-medium text-[26px] leading-8 text-second">
                Độc giả nói gì về “Truyện buồn chẳng có thật đâu (thật đấy)”
              </p>
              <div className="flex items-center gap-6 border-b border-white-overlay mt-4">
                <span className="font-medium text-[19px] leading-6 text-primary pt-[9px] pb-[11px] cursor-pointer">
                  Bình luận (1.234)
                </span>
                <span className="font-normal text-[16px] leading-5 text-[#B3B3B3] py-3 cursor-pointer">
                  Bình luận (1.234)
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="rounded-xl bg-[#1C1C1E] py-4 px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={AvatarDefault}
                        alt=""
                        width={42}
                        height={42}
                        className="rounded-full"
                      />
                      <span className="font-medium text-[19px] leading-6 text-second">
                        Tên User 01
                      </span>
                    </div>
                    <span className="font-normal text-[14px] leading-4 text-[#b3b3b3] text-right">
                      1 giờ trước
                    </span>
                  </div>
                  <div className="relative w-full bg-[#2c2c2e] rounded-xl py-4 px-14 mt-4">
                    <Image
                      src={IconQuoteOpen}
                      alt=""
                      width={24}
                      height={24}
                      className="absolute top-4 left-4"
                    />
                    <span className="font-normal text-[16px] leading-5 text-justify italic text-[#999]">
                      {`Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic.`}
                    </span>
                    <p className="font-normal text-[16px] leading-5 text-[#b3b3b3] text-right mt-1">
                      Chương 2: Tên của chương 2 balablabla
                    </p>
                    <Image
                      src={IconQuoteClose}
                      alt=""
                      width={24}
                      height={24}
                      className="absolute bottom-4 right-4"
                    />
                  </div>
                  <p className="text-normal text-[16px] leading-5 text-second mt-4 ml-14">
                    Đoạn này thực sự rất là xúc động, không thể nào mà quên được{" "}
                  </p>
                </div>
                <div className="rounded-xl bg-[#1C1C1E] py-4 px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={AvatarDefault}
                        alt=""
                        width={42}
                        height={42}
                        className="rounded-full"
                      />
                      <span className="font-medium text-[19px] leading-6 text-second">
                        Tên User 01
                      </span>
                    </div>
                    <span className="font-normal text-[14px] leading-4 text-[#b3b3b3] text-right">
                      1 giờ trước
                    </span>
                  </div>
                  <p className="text-normal text-[16px] leading-5 text-second mt-4 ml-14">
                    Đoạn này thực sự rất là xúc động, không thể nào mà quên được{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex justify-center py-2.5 px-6 rounded-[20px] border border-[#2C2C2E] gap-2.5 cursor-pointer">
                  <span className="font-normal text-[16px] text-second leading-5">
                    Xem thêm
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[12%] w-[300px] max-h-[300px] z-[1]">
            <div className="relative w-full rounded-[30px] p-3 bg-background after:absolute after:top-[-1px] after:left-[-1px] after:bottom-[-1px] after:right-[-1px] after:rounded-[30px] after:bg-border-gradient after:z-[-1]">
              <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[152px] h-[30px]">
                <Image
                  src={Rectangle8040}
                  alt=""
                  width={0}
                  height={0}
                  className="block object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full gap-1">
                  <p className="font-bold text-[13px] leading-4 text-second">
                    HỘI VIÊN
                  </p>
                  <Image src={VipImage} alt="" width={16} height={16} />
                </div>
              </div>
              <div className="flex flex-col mt-[30px] pb-4 gap-3">
                <p
                  // @ts-ignore
                  style={{ "-webkit-text-fill-color": "transparent" }}
                  className="font-medium text-[19px] leading-6 text-center bg-text-gradient bg-clip-text text-transparent"
                >
                  ĐỌC & NGHE SÁCH KHÔNG GIỚI HẠN
                </p>
                <p className="font-normal text-[16px] leading-5 text-second text-center">
                  Sách này và <span className="font-medium">20,000+</span> sách
                  điện tử, sách nói, truyện tranh...
                </p>
              </div>
              <div className="flex flex-col pt-4 gap-4 border-t border-white-overlay">
                <p className="font-normal text-[16px] leading-5 text-center text-pink/500">
                  <span className="font-medium text-[26px] leading-[33px]">
                    1.000
                    <span className="underline">đ</span>
                  </span>
                  /ngày
                </p>
                <div className="flex justify-center py-3 rounded-[99px] border border-white-overlay">
                  <span className="font-normal text-[16px] leading-5 text-second">
                    Trở thành Hội viên
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newest />
      <ForYou />
      <Ranking />
    </div>
  );
};

export default EbookDetail;

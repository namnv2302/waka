import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/images/logo.svg";
import PhoneIcon from "@/assets/images/phoneIcon.svg";
import MailIcon from "@/assets/images/mailIcon.svg";
import QrIcon from "@/assets/images/qrIcon.svg";
import AppStoreIcon from "@/assets/images/appStoreIcon.svg";
import GooglePlayIcon from "@/assets/images/googlePlayIcon.svg";

const Footer = () => {
  return (
    <footer className="bg-background lg:pt-20 lg:pb-10 xl:px-[60px] lg:px-8 px-4 pt-10 pb-10">
      <div className="grid grid-cols-7">
        <div className="lg:col-span-2 col-span-7">
          <Image src={LogoImage} alt="" width={180} />
          <p className="font-normal text-[#999] text-[16px] leading-5 pt-4 pb-5">
            Công ty cổ phần sách điện tử Waka
          </p>
          <div className="flex items-center justify-between lg:justify-normal gap-6">
            <p className="flex items-center gap-2">
              <Image src={PhoneIcon} alt="" width={24} height={24} />
              <span className="font-normal text-[#999] text-[16px] leading-5">
                0877736289
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Image src={MailIcon} alt="" width={24} height={24} />
              <span className="font-normal text-[#999] text-[16px] leading-5">
                Support@waka.vn
              </span>
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 lg:block hidden">
          <h3 className="font-medium text-[16px] leading-6 text-second tracking-[0.5] mb-4">
            Về chúng tôi
          </h3>
          <div className="columns-2">
            <ul className="flex flex-col gap-2.5 w-full">
              <li className="text-[#999] hover:text-[#b3b3b3]">
                <Link href={"/"} className="font-normal text-[16px] leading-5">
                  Giới thiệu
                </Link>
              </li>
              <li className="text-[#999] hover:text-[#b3b3b3]">
                <Link href={"/"} className="font-normal text-[16px] leading-5">
                  Cơ cấu tổ chức
                </Link>
              </li>
              <li className="text-[#999] hover:text-[#b3b3b3]">
                <Link href={"/"} className="font-normal text-[16px] leading-5">
                  Lĩnh vực hoạt động
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2.5 w-full">
              <li className="text-[#999] hover:text-[#b3b3b3]">
                <Link href={"/"} className="font-normal text-[16px] leading-5">
                  Cơ hội đầu tư
                </Link>
              </li>
              <li className="text-[#999] hover:text-[#b3b3b3]">
                <Link href={"/"} className="font-normal text-[16px] leading-5">
                  Tuyển dụng
                </Link>
              </li>
              <li className="text-[#999] hover:text-[#b3b3b3]">
                <Link href={"/"} className="font-normal text-[16px] leading-5">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <h3 className="font-medium text-[16px] leading-6 text-second tracking-[0.5] mb-4">
            Thông tin hữu ích
          </h3>
          <ul className="flex flex-col gap-2.5 w-full">
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Thỏa thuận sử dụng dịch vụ
              </Link>
            </li>
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Quyền lợi
              </Link>
            </li>
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Quy định riêng tư
              </Link>
            </li>
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Câu hỏi thường gặp
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <h3 className="font-medium text-[16px] leading-6 text-second tracking-[0.5] mb-4">
            Tin tức
          </h3>
          <ul className="flex flex-col gap-2.5 w-full">
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Tin dịch vụ
              </Link>
            </li>
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Review sách
              </Link>
            </li>
            <li className="text-[#999] hover:text-[#b3b3b3]">
              <Link href={"/"} className="font-normal text-[16px] leading-5">
                Lịch phát hành
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="flex gap-5">
            <div>
              <Image src={QrIcon} alt="" />
            </div>
            <div className="flex flex-col justify-between gap-4">
              <Link href={"/"}>
                <Image src={AppStoreIcon} alt="" />
              </Link>
              <Link href={"/"}>
                <Image src={GooglePlayIcon} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-[#999] text-[13px] mt-6 lg:mt-[60px]">
        Công ty Cổ phần Sách điện tử Waka - Tầng 6, tháp văn phòng quốc tế Hòa
        Bình, số 106, đường Hoàng Quốc Việt, phường Nghĩa Đô, Quận Cầu Giấy,
        thành phố Hà Nội, Việt Nam. <br /> ĐKKD số 0108796796 do SKHĐT TP Hà Nội
        cấp ngày 24/06/2019 <br />
        Chịu trách nhiệm nội dung: Ông Đinh Quang Hoàng Giấy xác nhận Đăng ký
        hoạt động phát hành xuất bản phẩm điện tử số 8132/XN-CXBIPH do Cục Xuất
        bản, In và Phát hành cấp ngày 31/12/2019 <br /> Giấy chứng nhận Đăng ký
        cung cấp dịch vụ nội dung thông tin trên mạng Viễn thông di động số
        19/GCN-DĐ do Cục Phát thanh, truyền hình và thông tin điện tử ký ngày
        11/03/2020 <br /> Số VPGD: 024.73086566 | Số CSKH: 1900545482 nhánh 5 |
        Hotline: 0877736289
      </p>
    </footer>
  );
};

export default Footer;

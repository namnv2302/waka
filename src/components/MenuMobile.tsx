"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar from "@/assets/images/avatar.png";
import menuMobile from "@/assets/images/menu";
import ArrowDown from "@/assets/images/arrowDown.svg";
import navigationIcon from "@/assets/images/navigation";

const MenuMobile = () => {
  const toggleDanhmuc = () => {
    const navMobile = document.querySelector(".nav-mobile");
    if (navMobile) {
      navMobile.classList.toggle("hidden");
    }
  };

  return (
    <div
      onClick={(e: any) => e.target.classList.add("hidden")}
      className="lg:hidden menu-mobile hidden fixed top-0 left-0 bottom-0 right-0 z-20 bg-dark-overlay"
    >
      <div
        onClick={(e: any) => e.stopPropagation()}
        className="menu-mobile-content absolute left-0 top-0 bottom-0 w-[300px] p-8 bg-[#121214] overflow-y-scroll"
      >
        <div className="flex flex-col items-center gap-4 mb-6">
          <Image
            src={Avatar}
            alt=""
            width={90}
            height={90}
            className="rounded-full object-cover"
          />
          <Link
            href={"/"}
            className="inline-block p-2.5 gap-2.5 w-full rounded-[22px] text-center bg-gradient-to-r from-[#0CB98D] to-[#1ED291]"
          >
            <span className="font-normal text-[16px] leading-5 uppercase text-white">
              đăng nhập
            </span>
          </Link>
        </div>
        <div className="flex flex-col py-6 border-y border-white-overlay gap-4">
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[1]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">
              Trang chủ
            </span>
          </Link>
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[2]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">
              Ưu đãi HOT
            </span>
          </Link>
        </div>
        <div className="flex flex-col py-6 gap-4 border-b border-white-overlay">
          <div
            onClick={toggleDanhmuc}
            className="flex items-center justify-between"
          >
            <p className="font-medium text-[19px] leading-6 text-white">
              Danh mục
            </p>
            <Image src={ArrowDown} alt="" width={10} height={6} />
          </div>
          <div className="nav-mobile flex flex-col gap-4">
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={navigationIcon[1]} alt="" width={24} height={24} />
              <span className="text-[16px] font-normal text-white">
                Sách điện tử
              </span>
            </Link>
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={navigationIcon[2]} alt="" width={24} height={24} />
              <span className="text-[16px] font-normal text-white">
                Sách nói
              </span>
            </Link>
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={navigationIcon[3]} alt="" width={24} height={24} />
              <span className="text-[16px] font-normal text-white">
                Truyện tranh
              </span>
            </Link>
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={navigationIcon[4]} alt="" width={24} height={24} />
              <span className="text-[16px] font-normal text-white">
                Sách hiệu Sồi
              </span>
            </Link>
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={navigationIcon[5]} alt="" width={24} height={24} />
              <span className="text-[16px] font-normal text-white">
                Podcast
              </span>
            </Link>
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={navigationIcon[6]} alt="" width={24} height={24} />
              <span className="text-[16px] font-normal text-white">
                Sách tóm tắt
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col pt-6 gap-4">
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[3]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">Combo</span>
          </Link>
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[4]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">
              Tuyển tập
            </span>
          </Link>
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[5]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">Tác giả</span>
          </Link>
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[6]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">Tin tức</span>
          </Link>
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={menuMobile[7]} alt="" width={24} height={24} />
            <span className="text-[16px] font-normal text-white">
              Review sách
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import MenuIcon from "@/assets/images/menuIcon.svg";
import images from "@/assets/images";

const HeaderMobile = () => {
  const navBarRef = useRef<any>();
  const headerMobileRef = useRef<any>();

  useEffect(() => {
    let currentOffset = window.scrollY;
    const handleScroll = () => {
      if (navBarRef && navBarRef.current) {
        if (window.scrollY > currentOffset) {
          navBarRef.current.classList.add("h-0", "hidden");
          currentOffset = window.scrollY;
        } else {
          navBarRef.current.classList.remove("h-0", "hidden");
          currentOffset = window.scrollY;
        }
      }

      if (headerMobileRef && headerMobileRef.current) {
        if (window.scrollY > 30) {
          headerMobileRef.current.classList.add("bg-black-085");
        } else {
          headerMobileRef.current.classList.remove("bg-black-085");
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenuMobile = () => {
    const menuMobile = document.querySelector(".menu-mobile");
    if (menuMobile) {
      menuMobile.classList.toggle("hidden");
    }
  };

  return (
    <header
      ref={headerMobileRef}
      className="lg:hidden fixed top-0 left-0 right-0 z-10"
    >
      <div className="py-3">
        <div className="flex items-center justify-between gap-8 px-4">
          <div onClick={toggleMenuMobile}>
            <Image src={MenuIcon} alt="" width={26} height={26} />
          </div>
          <div className="flex items-center h-fit xl:h-auto gap-4 lg:gap-[24px]">
            <div className="flex items-center h-[32px] min-w-[96px] rounded-2xl border border-comic-500 gap-[3px] py-[4px] px-[10px] bg-[rgba(255,204,0,.16)] cursor-pointer">
              <Image
                src={images.SubtractImage}
                alt=""
                className="w-[16px] h-[16px]"
              />
              <p className="font-normal text-[13px] leading-[16.6px] text-comic">
                Gói cước
              </p>
            </div>
            <Image
              src={images.SearchImage}
              alt=""
              className="h-[24px] w-[24px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div ref={navBarRef} className="h-[46px]">
        <div className="px-4 py-1 h-full">
          <ul className="flex items-center overflow-x-scroll whitespace-nowrap no-scrollbar w-full h-full gap-4">
            <li className="font-medium text-[16px] leading-5 text-white">
              <Link href={"/"}>Sách điện tử</Link>
            </li>
            <li className="font-medium text-[16px] leading-5 text-white">
              <Link href={"/"}>Sách nói</Link>
            </li>
            <li className="font-medium text-[16px] leading-5 text-white">
              <Link href={"/"}>Sách hiệu Sồi</Link>
            </li>
            <li className="font-medium text-[16px] leading-5 text-white">
              <Link href={"/"}>Sách điện tử</Link>
            </li>
            <li className="font-medium text-[16px] leading-5 text-white">
              <Link href={"/"}>Sách nói</Link>
            </li>
            <li className="font-medium text-[16px] leading-5 text-white">
              <Link href={"/"}>Sách hiệu Sồi</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;

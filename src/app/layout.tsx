import type { Metadata } from "next";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const netflixSans = localFont({
  src: [
    {
      path: "../assets/fonts/NetflixSans-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NetflixSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/NetflixSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Waka - Nền tảng xuất bản sách điện tử",
  description: "Nền tảng xuất bản sách điện tử",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={netflixSans.className}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}

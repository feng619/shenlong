import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shenlong-hardware.store"),
  title: "神隆五金行",
  description:
    "位於台灣基隆的五金行，販售各種生活、水電、施工、加工等會用到的器材、工具和零件",
  openGraph: {
    title: "神隆五金行",
    description:
      "位於台灣基隆的老字號五金行，販售各種生活、水電、施工、加工等會用到的器材、工具和零件",
    url: "/",
    siteName: "神隆五金行",
    images: [
      {
        url: "/images/mosaic3_800.png",
        width: 800,
        height: 608,
      },
      {
        url: "/images/mosaic3.png",
        width: 1492,
        height: 1134,
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  generator: "神隆五金行",
  applicationName: "神隆五金行",
  keywords: [
    "神隆",
    "五金行",
    "五金",
    "小五金",
    "大五金",
    "零件",
    "器材",
    "工具",
    "用品",
    "道具",
    "螺絲",
    "鎖",
    "皮帶",
    "矽利康",
    "輪子",
    "手推車",
    "噴漆",
    "粉刷",
    "鑽頭",
    "刀具",
    "捲尺",
    "潤滑油",
  ],
  authors: [{ name: "Kai Wu" }],
  creator: "Kai Wu",
  publisher: "神隆五金行",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}

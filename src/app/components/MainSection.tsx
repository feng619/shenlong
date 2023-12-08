import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import shenlongName from "../../../public/images/shenlong-name.png";

export default function MainSection() {
  return (
    <div
      style={{
        backgroundImage: `url(/images/dot-column.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-x",
      }}
      className="py-8"
    >
      <div className="relative mx-4 mb-2 xs:mx-16 xs:mb-4 md:mx-40 lg:mx-72 xl:mx-96">
        <Image src={shenlongName} alt="神隆五金行" sizes="100vw" priority />
      </div>

      <div className="flex flex-col items-center mx-10">
        <h1 className="hidden">神隆五金行</h1>
        <h3 className="text-lg text-stone-500">ShenLong Hardware Store</h3>
        <h4 className="text-orange-500">since 1984</h4>
        <h3 className="text-stone-500 mt-2">
          螺絲 · 鎖 · 皮帶 · 矽利康 · 輪子 · 手推車
        </h3>
        <h3 className="text-stone-500">
          噴漆 · 粉刷 · 鑽頭 · 刀具 · 捲尺 · 潤滑油
        </h3>
      </div>

      <div className="flex justify-center mt-6">
        <div>
          <div className="flex text-xl">
            <MapPin
              className="mt-2 mb-2 mr-2 xs:mr-4 text-orange-400"
              size={30}
            />

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">
                  <p className="text-stone-600 text-lg xs:text-xl">
                    202 基隆市中正區義二路100號
                  </p>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-fit">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0931664100854!2d121.74388537483448!3d25.132540877752675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4e409596f065%3A0x3bc186a5959ba141!2z56We6ZqG5LqU6YeR5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1701403025507!5m2!1szh-TW!2stw"
                  width="400"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex text-lg xs:text-xl">
            <Phone className="mt-2 mr-4 text-orange-400" size={30} />

            <p className="text-stone-600 py-2 px-4">02-2424-6455</p>
          </div>

          <div className="flex text-lg xs:text-xl">
            <Clock className="mt-2 mr-4 text-orange-400" size={30} />

            <div className="text-stone-600 py-2 px-4">
              <div className="grid grid-cols-2">
                <p className="mr-4">週一 ~ 週五</p>
                <p>08:00–18:00</p>
              </div>

              <div className="grid grid-cols-2">
                <p className="mr-4">週六</p>
                <p>08:00–13:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

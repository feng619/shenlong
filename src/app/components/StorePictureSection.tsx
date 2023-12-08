import Image from "next/image";

import mosaic2 from "../../../public/images/mosaic2.png";

export default function StorePictureSection() {
  return (
    <div className="relative w-full h-auto lg:w-1/2 lg:m-auto lg:rounded-lg">
      <Image
        src={mosaic2}
        alt="神隆五金行琳瑯滿目的商品展示圖"
        sizes="100vw"
        placeholder="blur"
        loading="eager"
      />

      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-10">
        <div className="relative w-2/3 p-4 text-center text-lg xs:text-2xl text-stone-100">
          <p className="relative z-20 pb-2">您要的五金都在這裡</p>
          <p className="relative z-20">歡迎參觀選購或電洽詢問</p>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md" />
        </div>
      </div>
    </div>
  );
}

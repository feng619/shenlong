import Image from "next/image";

export default function StorePictureSectionSmall() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/mosaic2.png"
        alt="神隆五金行"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
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

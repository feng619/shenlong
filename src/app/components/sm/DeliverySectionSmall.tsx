import Image from "next/image";
import { CircleDollarSign, Clock2, CircleOff } from "lucide-react";

export default function DeliverySectionSmall() {
  return (
    <div className="bg-orange-100 my-4 py-4">
      <div className="p-4">
        <h3 className="text-2xl font-bold text-center pb-4">宅配服務</h3>

        <div className="text-base xs:text-xl text-stone-600 pl-10 pr-6">
          <div className="flex">
            <CircleDollarSign className="mr-4 text-orange-400" size={30} />

            <div className="w-full grid grid-cols-3 mb-4">
              <p className="mr-4">宅配運費</p>
              <p className="col-span-2">60 - 130 元</p>
            </div>
          </div>

          <div className="flex">
            <Clock2 className="mr-4 text-orange-400" size={30} />

            <div className="w-full grid grid-cols-3 mb-4">
              <p className="mr-4">宅配時段</p>
              <p className="col-span-2">每週一至週五 10:00~22:00</p>
            </div>
          </div>

          <div className="flex">
            <CircleOff className="mr-4 text-orange-400" size={30} />

            <div className="w-full grid grid-cols-3">
              <p className="mr-4">宅配限制</p>
              <div className="col-span-2">
                <p>包裹尺寸長寬高總和小於 150 公分</p>
                <p>重量小於 20 公斤</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[120px]">
        <Image
          src="/images/delivery.png"
          alt="delivery"
          fill
          style={{ objectFit: "contain" }}
          className="opacity-50"
          sizes="100%"
        />
      </div>
    </div>
  );
}

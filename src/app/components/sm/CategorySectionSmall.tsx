import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/app/constants";

export default function CategorySectionSmall() {
  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold text-center pb-4">商品分類</h3>

      <div className="flex flex-col items-center">
        {categories.map(({ title, description, src }) => {
          return (
            <Card className="flex w-[400px] m-2" key={title}>
              <CardHeader className="p-0">
                <div className="relative w-24 h-24">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="100%"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <CardTitle>{title}</CardTitle>
                <CardDescription className="pt-2">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

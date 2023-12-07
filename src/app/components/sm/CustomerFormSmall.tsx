"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import sendMsg from "../../utils/sendMsg";

export const FormSchema = z.object({
  myForm: z
    .string({ required_error: "請輸入您的意見反饋" })
    .min(1, {
      message: "請輸入您的意見反饋",
    })
    .max(300, {
      message: "最多能夠輸入 300 個字",
    }),
});

export default function CustomerFormSmall() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "您的意見回饋發送成功",
      description: "感謝您寶貴的意見回饋！",
    });

    form.reset({ myForm: "" });

    sendMsg(data);
  }

  return (
    <div className="flex justify-center m-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[400px] space-y-4 "
        >
          <FormField
            control={form.control}
            name="myForm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>顧客意見回饋</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="請填寫任何想向我們傳達的建議"
                    className="resize-none focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-orange-600">
            送出意見
          </Button>
        </form>
      </Form>
    </div>
  );
}

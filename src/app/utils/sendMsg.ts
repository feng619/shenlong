"use server";

import * as z from "zod";
import axios from "axios";

import { FormSchema } from "../components/sm/CustomerFormSmall";

export default async function sendMsg(data: z.infer<typeof FormSchema>) {
  const res1 = await axios({
    headers: {
      Authorization: `Bearer ${process.env.AUTH}`,
    },
    method: "get",
    url: "https://api.line.me/v2/bot/message/quota",
  });
  const res2 = await axios({
    headers: {
      Authorization: `Bearer ${process.env.AUTH}`,
    },
    method: "get",
    url: "https://api.line.me/v2/bot/message/quota/consumption",
  });

  try {
    axios({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AUTH}`,
      },
      method: "post",
      url: "https://api.line.me/v2/bot/message/push",
      data: {
        to: process.env.USER_ID,
        messages: [
          {
            type: "text",
            text: `${data.myForm}\n(${res2?.data.totalUsage + 1} / ${
              res1?.data.value
            })`,
          },
        ],
      },
    });
  } catch (error) {
    console.log(error);
  }
}
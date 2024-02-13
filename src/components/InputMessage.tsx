"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { messages } from "@/utils/types";
import conversation from "@/server actions/conversation";
export default function InputMessage(chatId: { chatid: string }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<messages>();
  const onSubmit: SubmitHandler<messages> = async (data) => {
    try {
      const [userid, partnerid] = chatId.chatid.split("--");
      (data.senderId = userid), (data.recieverId = partnerid);
      data.delivered = false;
      if (data.text !== undefined) {
        data.text = data.text.trim();
        if (data.text !== "") {
          conversation(data);
        }
        resetField("text");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row">
      <div className="h-11 w-96 bg-white  "></div>
      <div className="relative">
        <section className="absolute bottom-0">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row ">
            <div className="">
              <input
                placeholder="Type a message"
                {...register("text")}
                className="h-11 w-96 rounded-md p-1 border border-deluge-400 focus:outline-deluge-500 focus:border-3"
              />
            </div>
            <button type="submit" className="h-11 w-12 bg-gray-300 rounded-md">
              enter
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

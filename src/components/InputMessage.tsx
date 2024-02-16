"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { messages } from "@/utils/types";
import conversation from "@/server actions/conversation";
import { LuSendHorizonal } from "react-icons/lu";
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
      <div className="h-10 lg:w-96 sm:w-9"></div>
      <div className="relative">
        <section className="absolute bottom-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-row gap-x-0"
          >
            <div className="">
              <input
                autoComplete="off"
                contentEditable="true"
                placeholder="Type a message"
                {...register("text")}
                className="h-10 w-96 sm:w-80 rounded-l-lg p-1 border border-deluge-400 focus:outline-deluge-500 focus:border-3"
              />
            </div>
            <button
              type="submit"
              className="h-10 w-12 bg-deluge-400 rounded-r-lg"
            >
              <LuSendHorizonal className="w-12 h-8" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

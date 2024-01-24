"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { messages } from "@/utils/types";
function InputMessage(chatId: { chatid: string }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<messages>();
  const onSubmit: SubmitHandler<messages> = async (data) => {
    try {
      const [userid, partnerid] = chatId.chatid.split("--");
      const date = new Date();
      (data.senderId = userid), (data.recieverId = partnerid);
      (data.delivered = false), (data.seen = false);
      (data.year = date.getFullYear()),
      (data.month = date.getMonth()),
      (data.day = date.getDay()),
      (data.hour = date.getHours()),
      (data.minute = date.getMinutes());
      if (data.text !== undefined) {
        data.text = data.text.trim();
        if (data.text !== "") console.log(data);
        resetField("text");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <section className="absolute bottom-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
          <input
            placeholder="enter message"
            {...register("text")}
            className="h-10 w-96"
          />
          <button type="submit">enter</button>
        </form>
      </section>
    </div>
  );
}

export default InputMessage;
function getDate(): Uint8Array {
  throw new Error("Function not implemented.");
}

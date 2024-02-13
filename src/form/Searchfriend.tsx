"use client";
import { getdata } from "@/_actions/getdata";
import { userName } from "@/utils/types";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const notify = (res: string) => toast(res);

function Searchfriend() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<userName>();
  const onSubmit: SubmitHandler<userName> = async (data) => {
    if (data.username !== "")
      await getdata(data).then((res) => notify(res?.data));
    resetField("username");
  };

  return (
    <div className=" bg-deluge-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row bg-deluge-600 gap-x-2 p-2"
      >
        <input
          placeholder="Username..."
          {...register("username")}
          className="h-11 w-full p-2 rounded-lg border-2"
        />
        <button type="submit" className="p-2 bg-red-300 rounded-lg h-11">
          search
        </button>
      </form>
      <section>
        <Toaster></Toaster>
      </section>
    </div>
  );
}

export default Searchfriend;

"use client";
import { getdata } from "@/_actions/getdata";
import { userName } from "@/utils/types";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { IoPersonAddSharp } from "react-icons/io5";

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
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row ">
        <input
          placeholder="Username..."
          autoComplete="off"
          {...register("username")}
          className="h-11 w-full p-2 rounded-lg  focus:outline-deluge-500 border border-deluge-300"
        />
        <button type="submit" className="p-2 rounded-lg h-11">
          <IoPersonAddSharp className="" size={30} />
        </button>
      </form>
      <section>
        <Toaster></Toaster>
      </section>
    </div>
  );
}

export default Searchfriend;

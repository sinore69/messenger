import { getCryptoData } from "@/server actions/getCrypto";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LuSendHorizonal } from "react-icons/lu";
import { botMessage } from "@/utils/types";
interface pageprops {
  userName: string;
  botName: string;
  updateState: (newValue: botMessage) => void;
}
function BotTextInput({ userName, botName, updateState }: pageprops) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<botMessage>();
  const onSubmit: SubmitHandler<botMessage> = async (data) => {
    try {
      (data.sender = userName), (data.reciever = botName);
      if (data.message !== undefined) {
        data.message = data.message.trim();
        if (data.message !== "") {
          const res = await getCryptoData(data);
          updateState(data);
          updateState(res);
        }
        resetField("message");
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
                {...register("message")}
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

export default BotTextInput;

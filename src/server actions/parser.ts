import { botMessage } from "@/utils/types";
function parser(data: string, coin: string) {
  const res = JSON.parse(data);
  console.log(res.data[coin].quote);
  const result: botMessage = {
    message: "",
    sender: "",
    reciever: "",
  };
  return "result";
}

export default parser;

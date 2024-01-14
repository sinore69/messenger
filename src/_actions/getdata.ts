import { userNumber } from "@/utils/types";
import axios from "axios";
export async function getdata(data:userNumber){
    try {
       const friend=await axios.get(`/api/friendrequest/+91${data.number}`)
      .then();
      return friend;
    } catch (error) {
        console.log(error)
    }
  }

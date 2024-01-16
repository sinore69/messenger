import { userName } from "@/utils/types";
import axios from "axios";
export async function getdata(data:userName){
    try {
       const friend=await axios.get(`/api/friendrequest/${data.username}`)
      .then();
      return friend;
    } catch (error) {
        console.log(error)
    }
  }

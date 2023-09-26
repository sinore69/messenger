import { userNumber } from "@/utils/types";
import axios from "axios";
export async function senddata(data:userNumber){
    try {
      await axios.get(`/api/friendrequest/+91${data.number}`)
      .then(res=>console.log(res))
    } catch (error) {
        console.log(error)
    }
  }

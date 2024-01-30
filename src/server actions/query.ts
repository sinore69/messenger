import { useQuery } from "@tanstack/react-query";
import getChats from "./getChats";
import { useEffect } from "react";
export default  function initialMessages(userId: string, partnerId: string) {
  const history = useQuery({
    queryKey: ["conversation"],
    queryFn: async () =>await getChats(userId, partnerId),
  });
  //if (history.isFetched) console.log(history.data);
  
  return history.data;
}

import { useQuery } from "@tanstack/react-query";
import getChats from "./getChats";
export default  function initialMessages(userId: string, partnerId: string) {
  const history = useQuery({
    queryKey: ["conversation"],
    queryFn: async () =>await getChats(userId, partnerId),
  });  
  return history.data;
}

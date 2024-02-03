//creates a user json containing non sensitive user data
import { User } from "@clerk/nextjs/server";

export function clientuser(user: User) {
  const clientjson = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username:user.username,
  };
  return clientjson;
}

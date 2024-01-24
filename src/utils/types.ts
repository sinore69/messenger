export type userName = {
  username: string;
};

export type newchat = {
  id: string;
  username: string;
  friendOf: string | null;
};

export type messages = {
  senderId: string;
  text: string;
  recieverId: string;
};

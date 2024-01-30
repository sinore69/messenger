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
  delivered: boolean;
};

export type chats = {
  id: number;
  senderId: string;
  recieverId: string;
  content: string;
  dateTime: Date;
  delivered: boolean;
};

export type chatid = {
  chatId: string;
};

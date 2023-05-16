export type UserType = {
  name: string;
  image?: string;
  id: string;
  username: string;
};
export type TweetType = {
  user: UserType;
  content: string;
};

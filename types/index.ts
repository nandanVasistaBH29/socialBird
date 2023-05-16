export type UserType = {
  name: string;
  image?: string;
  id: string;
  username: string;
};
export type TweetType = {
  user: UserType;
  content: string;
  id: string;
  createdAt: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};

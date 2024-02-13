export interface ILikedCom {
  id: string | null;
  user_id: string | null;
  comment_id: string | null;
  post_id: string | null;
}

export interface IPostComment {
  comments: number | null;
  creator: string | null;
  date_created: string | null;
  description: string | null;
  id: string;
  likes: number | null;
  parent: string | null;
  post_id: string | null;
  likedComment: ILikedCom[];
  user: {
    id: string;
    username: string | null;
  } | null;
}

import { IImagePreview } from "./create_post_interfaces";

export interface ILikedPost {
  id: string | null;
  post_id: string | null;
  user_id: string | null;
}

export interface IPost {
  category_id: string | null;
  comments: number | null;
  creator: string | null;
  date_created: string | null;
  description: string | null;
  id: string;
  image: IImagePreview[] | null;
  likes: number | null;
  location_id: string | null;
  title: string | null;
  likedPost: ILikedPost[] | null;
  user: {
    id: string;
    username: string | null;
  } | null;
  location: {
    latitude: number | null;
    longitude: number | null;
    zoom: number | null;
  } | null;
}

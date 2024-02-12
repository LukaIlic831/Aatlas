import { v4 as uuid } from "uuid";
import supabase from "../../supabase";

const incLikeOnPost = async (
  postId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("post")
    .update({
      likes: likes + 1,
    })
    .eq("id", postId);
  error && alert(error.message);
  setLikedDisabled(false);
};

const addLikedPost = async (
  currentUserId: string,
  postId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let id = uuid();
  const { error } = await supabase.from("likedPost").insert({
    id: id,
    user_id: currentUserId,
    post_id: postId,
  });
  error && alert(error.message);
  incLikeOnPost(postId, likes, setLikedDisabled);
};

export default addLikedPost;

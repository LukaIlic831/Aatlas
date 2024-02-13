import { v4 as uuid } from "uuid";
import supabase from "../../supabase";

const incLikeOnComment = async (
  commentId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("comment")
    .update({
      likes: likes + 1,
    })
    .eq("id", commentId);
  error && alert(error.message);
  setLikedDisabled(false);
};

const addLikedComment = async (
  currentUserId: string,
  postId: string,
  commentId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let id = uuid();
  const { error } = await supabase.from("likedComment").insert({
    id: id,
    user_id: currentUserId,
    comment_id: commentId,
    post_id: postId,
  });
  error && alert(error.message);
  incLikeOnComment(commentId, likes, setLikedDisabled);
};

export default addLikedComment;

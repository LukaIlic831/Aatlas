import supabase from "../../supabase";

const decLikeOnComment = async (
  commentId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("comment")
    .update({
      likes: likes - 1,
    })
    .eq("id", commentId);
  error && alert(error.message);
  setLikedDisabled(false);
};

const deleteLikedComment = async (
  currentUserId: string,
  postId: string,
  commentId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("likedComment")
    .delete()
    .eq("post_id", postId)
    .eq("comment_id", commentId)
    .eq("user_id", currentUserId);
  error && alert(error.message);
  decLikeOnComment(commentId, likes, setLikedDisabled);
};

export default deleteLikedComment;

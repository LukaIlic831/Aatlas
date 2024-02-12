import supabase from "../../supabase";

const decLikeOnPost = async (
  postId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("post")
    .update({
      likes: likes - 1,
    })
    .eq("id", postId);
  error && alert(error.message);
  setLikedDisabled(false);
};

const deleteLikedPost = async (
  currentUserId: string,
  postId: string,
  likes: number,
  setLikedDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("likedPost")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", currentUserId);
  error && alert(error.message);
  decLikeOnPost(postId, likes, setLikedDisabled);
};

export default deleteLikedPost;

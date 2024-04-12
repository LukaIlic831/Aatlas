import supabase from "../../supabase";
import { EnumRefetchAction } from "../../ts/enums/refetch_toast_action";
const handleDeletePost = async (
  postId: string,
  setRefetch: React.Dispatch<React.SetStateAction<EnumRefetchAction>>
) => {
  try {
    await deleteLikedComments(postId);
    await deletePostComments(postId);
    await deleteLikedPost(postId);
    await deletePost(postId);
    setRefetch(EnumRefetchAction.delete);
  } catch (err) {
    alert(err as Error);
  }
};

const deletePost = async (postId: string) => {
  const { error } = await supabase.from("post").delete().eq("id", postId);
  error && alert(error.message);
};

const deleteLikedComments = async (postId: string) => {
  const { error } = await supabase
    .from("likedComment")
    .delete()
    .eq("post_id", postId);
  error && alert(error.message);
};

const deletePostComments = async (postId: string) => {
  const { error } = await supabase
    .from("comment")
    .delete()
    .eq("post_id", postId);
  error && alert(error.message);
};

const deleteLikedPost = async (postId: string) => {
  const { error } = await supabase
    .from("likedPost")
    .delete()
    .eq("post_id", postId);
  error && alert(error.message);
};

export default handleDeletePost;

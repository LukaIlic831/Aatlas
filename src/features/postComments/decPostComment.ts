import supabase from "../../supabase";

const decPostComment = async (postId: string) => {
  const { error } = await supabase.rpc("decrement_post_comments", {
    post_id: postId,
  });
  error && alert(error.message);
};

export default decPostComment;

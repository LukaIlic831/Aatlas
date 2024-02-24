import supabase from "../../supabase";

const incPostComment = async (postId: string) => {
  const { error } = await supabase.rpc("increment_post_comments", {
    post_id: postId,
  });
  error && alert(error.message);
};

export default incPostComment;

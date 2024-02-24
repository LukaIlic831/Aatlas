import supabase from "../../supabase";

const incCommentReplies = async (
  commentId: string
) => {
  const { error } = await supabase.rpc("increment_comment_comments", {
    comment_id: commentId,
  });
  error && alert(error.message);
};

export default incCommentReplies;

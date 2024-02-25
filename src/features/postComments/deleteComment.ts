import supabase from "../../supabase";

const deleteCommentFromLikedComments = async (commentId: string) => {
  const { error } = await supabase
    .from("likedComment")
    .delete()
    .eq("id", commentId);
  error && alert(error.message);
};

const deleteComment = async (
  commentId: string,
  fetchComments: () => Promise<void>,
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>,
  setBlockReply: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("comment")
    .update({ description: null })
    .eq("id", commentId);

  error && alert(error.message);
  deleteCommentFromLikedComments(commentId);
  fetchComments().then(() => setOpenCommentTextarea(false));
  setBlockReply(true);
};

export default deleteComment;

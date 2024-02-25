import supabase from "../../supabase";
const editComment = async (
  commentId: string,
  newDescription: string,
  fetchComments: () => Promise<void>,
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = await supabase
    .from("comment")
    .update({ description: newDescription })
    .eq("id", commentId);

  error && alert(error.message);
  fetchComments().then(() => setOpenCommentTextarea(false));
};
export default editComment;

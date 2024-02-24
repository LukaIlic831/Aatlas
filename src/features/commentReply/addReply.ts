import { v4 as uuid } from "uuid";
import supabase from "../../supabase";
import incPostComment from "../postComments/incPostComment";
import incCommentReplies from "./incCommentReplies";

const addCommentReply = async (
  postId: string,
  commentId: string,
  currentUserId: string,
  description: string,
  fetchComments: () => Promise<void>,
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let id = uuid();
  const { error } = await supabase.from("comment").insert({
    id: id,
    post_id: postId,
    creator: currentUserId,
    description: description,
    likes: 0,
    comments: 0,
    parent: commentId,
    date_created: new Date().toISOString(),
  });

  error && alert(error.message);
  incCommentReplies(commentId)
    .then(() => fetchComments())
    .finally(() => setOpenCommentTextarea(false));
  incPostComment(postId);
};

export default addCommentReply;

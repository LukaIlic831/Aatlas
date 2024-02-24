import supabase from "../../supabase";
import { v4 as uuid } from "uuid";
import incPostComment from "./incPostComment";

const addComment = async (
  postId: string,
  currentUserId: string,
  description: string,
  fetchComments: () => Promise<void>,
  setCommentText: React.Dispatch<React.SetStateAction<string>>
) => {
  let id = uuid();
  const { error } = await supabase.from("comment").insert({
    id: id,
    post_id: postId,
    creator: currentUserId,
    description: description,
    likes: 0,
    comments: 0,
    parent: null,
    date_created: new Date().toISOString(),
  });

  error && alert(error.message);
  fetchComments();
  incPostComment(postId);
  setCommentText("");
};

export default addComment;

import supabase from "../../supabase";
import { v4 as uuid } from "uuid";

const addComment = async (
  postId: string,
  currentUserId: string,
  description: string,
  fetchComments: () => Promise<void>
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
};

export default addComment;

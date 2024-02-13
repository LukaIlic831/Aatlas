import * as React from "react";
import Post from "../Post/Post";
import Comment from "./Post Page Components/Comment";
import { useNavigate, useParams } from "react-router";
import ReactTextareaAutosize from "react-textarea-autosize";
import useFetchWithFilter from "../../hooks/useFetchWithFilter";
import { IPost, IPostComment } from "../../ts/interfaces/post_interfaces";
import addComment from "../../features/postComments/addComment";
import useAppContext from "../../hooks/useAppContext";
import supabase from "../../supabase";
import Comments from "./Post Page Components/Comments";
import SelectedPostTextarea from "./Post Page Components/SelectedPostTextarea";

interface ISelectedPostProps {}

const SelectedPost: React.FunctionComponent<ISelectedPostProps> = (props) => {
  const { id } = useParams();
  const { currentUser } = useAppContext();
  const navigate = useNavigate();
  const [commentText, setCommentText] = React.useState<string>("");
  const [comments, setComments] = React.useState<IPostComment[] | null>(null);
  const post = useFetchWithFilter<IPost[]>(
    "post",
    "*,user(*), location(*), likedPost(*)",
    "id",
    id!
  );
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comment")
      .select(
        `
      *,
      user(*)`
      )
      .eq("post_id", id!)
      .order("date_created", { ascending: true });
    error ? alert(error.message) : setComments(data);
  };
  React.useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="post__wrapper">
      <div className="post__block cursor-block">
        <div className="post__back">
          <div className="post__back--icon" onClick={() => navigate(-1)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.4em"
              width="1.4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              ></path>
            </svg>
          </div>
        </div>
        {post.data && <Post post={post.data[0]} />}
        {currentUser?.user.id && (
          <SelectedPostTextarea
            setCommentText={setCommentText}
            commentText={commentText}
            postId={id!}
            currentUserId={currentUser?.user.id}
            fetchComments={fetchComments}
          />
        )}
      </div>
      {comments ? (
        comments.length > 0 ? (
          <Comments comments={comments} />
        ) : (
          <div className="after-loader__block">
            <p>No comments</p>
          </div>
        )
      ) : (
        <div className="loader__block">
          <p>Loading comments...</p>
        </div>
      )}
    </div>
  );
};

export default SelectedPost;

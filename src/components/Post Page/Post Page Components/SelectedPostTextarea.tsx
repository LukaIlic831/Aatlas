import * as React from "react";
import addComment from "../../../features/postComments/addComment";
import ReactTextareaAutosize from "react-textarea-autosize";

interface ISelectedPostTextareaProps {
  setCommentText: React.Dispatch<React.SetStateAction<string>>;
  commentText: string;
  postId: string;
  currentUserId: string;
  fetchComments: () => Promise<void>;
}

const SelectedPostTextarea: React.FunctionComponent<
  ISelectedPostTextareaProps
> = (props) => {
  return (
    <>
      <div className="post__comment">
        <ReactTextareaAutosize
          placeholder="Leave your comment here"
          maxLength={1200}
          onChange={(e) => props.setCommentText(e.target.value)}
          value={props.commentText}
        />
      </div>
      <div className="post__button">
        <button
          style={{
            pointerEvents: props.commentText.length > 0 ? "auto" : "none",
            opacity: props.commentText.length > 0 ? 1 : 0.6,
          }}
          onClick={() =>
            addComment(
              props.postId,
              props.currentUserId,
              props.commentText,
              props.fetchComments,
              props.setCommentText
            )
          }
        >
          Comment
        </button>
      </div>
    </>
  );
};

export default SelectedPostTextarea;

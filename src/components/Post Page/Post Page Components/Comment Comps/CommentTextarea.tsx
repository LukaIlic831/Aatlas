import * as React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import addCommentReply from "../../../../features/commentReply/addReply";

interface ICommentTextareaProps {
  postId: string;
  currentUserId: string;
  commentId: string;
  fetchComments: () => Promise<void>;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentTextarea: React.FunctionComponent<ICommentTextareaProps> = (
  props
) => {
  const [replyText, setReplyText] = React.useState<string>("");
  return (
    <>
      <div className="post__comment">
        <ReactTextareaAutosize
          placeholder="Leave your comment here"
          maxLength={1200}
          onChange={(e) => setReplyText(e.target.value)}
        />
      </div>
      <div className="post__button">
        <button
          style={{
            pointerEvents: replyText.length > 0 ? "auto" : "none",
            opacity: replyText.length > 0 ? 1 : 0.6,
          }}
          onClick={() =>
            addCommentReply(
              props.postId,
              props.commentId,
              props.currentUserId,
              replyText,
              props.fetchComments,
              props.setOpenCommentTextarea
            )
          }
        >
          Comment
        </button>
      </div>
    </>
  );
};

export default CommentTextarea;

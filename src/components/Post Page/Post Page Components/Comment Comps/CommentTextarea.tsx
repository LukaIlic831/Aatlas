import * as React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import addCommentReply from "../../../../features/commentReply/addReply";
import editComment from "../../../../features/postComments/editComment";

interface ICommentTextareaProps {
  action: string;
  postId: string;
  currentUserId: string;
  commentId: string;
  fetchComments: () => Promise<void>;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentTextarea: React.FunctionComponent<ICommentTextareaProps> = (
  props
) => {
  const [textareaValue, setTextareaValue] = React.useState<string>("");
  return (
    <>
      <div className="post__comment">
        <ReactTextareaAutosize
          placeholder={
            props.action === "addReply"
              ? "Leave your reply here"
              : "Leave your new text here"
          }
          maxLength={1200}
          onChange={(e) => setTextareaValue(e.target.value)}
        />
      </div>
      <div className="post__button">
        <button
          style={{
            pointerEvents: textareaValue.length > 0 ? "auto" : "none",
            opacity: textareaValue.length > 0 ? 1 : 0.6,
          }}
          onClick={() =>
            props.action === "addReply"
              ? addCommentReply(
                  props.postId,
                  props.commentId,
                  props.currentUserId,
                  textareaValue,
                  props.fetchComments,
                  props.setOpenCommentTextarea
                )
              : editComment(
                  props.commentId,
                  textareaValue,
                  props.fetchComments,
                  props.setOpenCommentTextarea
                )
          }
        >
          {props.action === "addReply" ? "Reply" : "Edit"}
        </button>
      </div>
    </>
  );
};

export default CommentTextarea;

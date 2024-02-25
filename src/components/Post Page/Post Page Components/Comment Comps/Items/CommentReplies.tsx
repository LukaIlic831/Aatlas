import * as React from "react";
import { ReactComponent as CommentSvg } from "../../../../../assets/comments.svg";
import useAppContext from "../../../../../hooks/useAppContext";
import toastError from "../../../../../toasts/toastError";

interface ICommentRepliesProps {
  comNumbers: number;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
  openCommentTextarea: boolean;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  action: string;
}

const CommentReplies: React.FunctionComponent<ICommentRepliesProps> = (
  props
) => {
  const { currentUser } = useAppContext();
  const handleCommentButton = () => {
    currentUser?.user.id
      ? props.action === "addReply"
        ? props.setOpenCommentTextarea(!props.openCommentTextarea)
        : props.setOpenCommentTextarea(true)
      : toastError.actionBeforeSignInError();
    props.setAction("addReply");
  };
  return (
    <li
      className="comment__info--items-item items__item"
      onClick={handleCommentButton}
    >
      <div className="comment__info--items-item-icon items__item--icon">
        <CommentSvg />
      </div>
      <div className="comment__info--items-item-count items__item--count">
        <span>{props.comNumbers}</span>
      </div>
    </li>
  );
};

export default CommentReplies;

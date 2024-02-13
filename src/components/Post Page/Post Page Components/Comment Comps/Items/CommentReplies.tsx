import * as React from "react";
import { ReactComponent as CommentSvg } from "../../../../../assets/comments.svg";

interface ICommentRepliesProps {
  comNumbers: number;
}

const CommentReplies: React.FunctionComponent<ICommentRepliesProps> = (
  props
) => {
  return (
    <li className="comment__info--items-item items__item">
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

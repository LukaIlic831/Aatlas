import * as React from "react";
import { ReactComponent as TrashSvg } from "../../../../../assets/trash.svg";
import deleteComment from "../../../../../features/postComments/deleteComment";
import { IPostComment } from "../../../../../ts/interfaces/comment_interfaces";

interface ICommentTrashProps {
  fetchComments: () => Promise<void>;
  com: IPostComment;
}

const CommentTrash: React.FunctionComponent<ICommentTrashProps> = (props) => {
  return (
    <li
      className="trash__info--items-item items__item"
      onClick={() =>
        deleteComment(props.com.id, props.com.post_id!, props.fetchComments)
      }
    >
      <div className="trash__info--items-item-icon items__item--icon">
        <TrashSvg />
      </div>
    </li>
  );
};

export default CommentTrash;

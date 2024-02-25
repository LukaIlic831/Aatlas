import * as React from "react";
import { ReactComponent as TrashSvg } from "../../../../../assets/trash.svg";
import deleteComment from "../../../../../features/postComments/deleteComment";
import { IPostComment } from "../../../../../ts/interfaces/comment_interfaces";

interface ICommentTrashProps {
  fetchComments: () => Promise<void>;
  com: IPostComment;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
  setBlockReply: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentTrash: React.FunctionComponent<ICommentTrashProps> = (props) => {
  return (
    <li
      className="trash__info--items-item items__item"
      onClick={() =>
        deleteComment(
          props.com.id,
          props.fetchComments,
          props.setOpenCommentTextarea,
          props.setBlockReply
        )
      }
    >
      <div className="trash__info--items-item-icon items__item--icon">
        <TrashSvg />
      </div>
    </li>
  );
};

export default CommentTrash;

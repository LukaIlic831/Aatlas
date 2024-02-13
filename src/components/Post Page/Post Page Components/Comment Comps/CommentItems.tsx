import * as React from "react";
import CommentLikes from "./Items/CommentLikes";
import CommentReplies from "./Items/CommentReplies";
import { IPostComment } from "../../../../ts/interfaces/post_interfaces";

interface ICommentItemsProps {
  com: IPostComment;
}

const CommentItems: React.FunctionComponent<ICommentItemsProps> = (props) => {
  return (
    <ul className="comment__info--items items">
      <CommentLikes com={props.com} />
      <CommentReplies comNumbers={props.com.comments!} />
    </ul>
  );
};

export default CommentItems;

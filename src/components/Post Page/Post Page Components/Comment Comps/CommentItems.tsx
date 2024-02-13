import * as React from "react";
import CommentLikes from "./Items/CommentLikes";
import CommentReplies from "./Items/CommentReplies";
import { IPostComment } from "../../../../ts/interfaces/comment_interfaces";

interface ICommentItemsProps {
  com: IPostComment;
  likedCommentFromCurrentUser: boolean;
}

const CommentItems: React.FunctionComponent<ICommentItemsProps> = (props) => {
  return (
    <ul className="comment__info--items items">
      <CommentLikes
        com={props.com}
        likedCommentFromCurrentUser={props.likedCommentFromCurrentUser}
      />
      <CommentReplies comNumbers={props.com.comments!} />
    </ul>
  );
};

export default CommentItems;

import * as React from "react";
import CommentLikes from "./Items/CommentLikes";
import CommentReplies from "./Items/CommentReplies";
import { IPostComment } from "../../../../ts/interfaces/comment_interfaces";

interface ICommentItemsProps {
  com: IPostComment;
  likedCommentFromCurrentUser: boolean;
  openCommentTextarea: boolean;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentItems: React.FunctionComponent<ICommentItemsProps> = (props) => {
  return (
    <ul className="comment__info--items items">
      <CommentLikes
        com={props.com}
        likedCommentFromCurrentUser={props.likedCommentFromCurrentUser}
      />
      <CommentReplies
        comNumbers={props.com.comments!}
        setOpenCommentTextarea={props.setOpenCommentTextarea}
        openCommentTextarea={props.openCommentTextarea}
      />
    </ul>
  );
};

export default CommentItems;

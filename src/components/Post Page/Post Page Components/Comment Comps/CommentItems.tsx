import * as React from "react";
import CommentLikes from "./Items/CommentLikes";
import CommentReplies from "./Items/CommentReplies";
import { IPostComment } from "../../../../ts/interfaces/comment_interfaces";
import CommentTrash from "./Items/CommentTrash";
import useAppContext from "../../../../hooks/useAppContext";
import CommentEdit from "./Items/CommentEdit";

interface ICommentItemsProps {
  com: IPostComment;
  likedCommentFromCurrentUser: boolean;
  openCommentTextarea: boolean;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
  fetchComments: () => Promise<void>;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  action: string;
  setBlockReply: React.Dispatch<React.SetStateAction<boolean>>;
  blockReply: boolean;
}

const CommentItems: React.FunctionComponent<ICommentItemsProps> = (props) => {
  const { currentUser } = useAppContext();
  return (
    <ul className="comment__info--items items">
      {props.com.description && (
        <CommentLikes
          com={props.com}
          likedCommentFromCurrentUser={props.likedCommentFromCurrentUser}
        />
      )}
      <CommentReplies
        comNumbers={props.com.comments!}
        setOpenCommentTextarea={props.setOpenCommentTextarea}
        openCommentTextarea={props.openCommentTextarea}
        setAction={props.setAction}
        action={props.action}
        blockReply={props.blockReply}
      />
      {props.com.creator === currentUser?.user.id && props.com.description && (
        <CommentEdit
          setAction={props.setAction}
          setOpenCommentTextarea={props.setOpenCommentTextarea}
          action={props.action}
        />
      )}
      {props.com.creator === currentUser?.user.id && props.com.description && (
        <CommentTrash
          fetchComments={props.fetchComments}
          com={props.com}
          setOpenCommentTextarea={props.setOpenCommentTextarea}
          setBlockReply={props.setBlockReply}
        />
      )}
    </ul>
  );
};

export default CommentItems;

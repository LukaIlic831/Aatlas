import * as React from "react";
import { ReactComponent as LikeSvg } from "../../../../../assets/likes.svg";
import { ReactComponent as LikeFill } from "../../../../../assets/likesFill.svg";
import useAppContext from "../../../../../hooks/useAppContext";
import { IPostComment } from "../../../../../ts/interfaces/comment_interfaces";
import toastError from "../../../../../toasts/toastError";
import addLikedComment from "../../../../../features/commentLikes/addLike";
import deleteLikedComment from "../../../../../features/commentLikes/deleteLike";

interface ICommentLikesProps {
  com: IPostComment;
  likedCommentFromCurrentUser: boolean;
}

const CommentLikes: React.FunctionComponent<ICommentLikesProps> = (props) => {
  const [likes, setLikes] = React.useState<number>(props.com.likes!);
  const [liked, setLiked] = React.useState<boolean>(
    props.likedCommentFromCurrentUser
  );
  const [likedDisabled, setLikedDisabled] = React.useState<boolean>(false);
  const { currentUser } = useAppContext();
  const likeComment = () => {
    if (!currentUser?.user.id) {
      toastError.likeError();
    } else {
      setLikedDisabled(true);
      if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
        setLiked(false);
        deleteLikedComment(
          currentUser.user.id!,
          props.com.post_id!,
          props.com.id,
          likes,
          setLikedDisabled
        );
      } else {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
        addLikedComment(
          currentUser.user.id!,
          props.com.post_id!,
          props.com.id,
          likes,
          setLikedDisabled
        );
      }
    }
  };
  return (
    <li
      className="comment__info--items-item items__item"
      onClick={likeComment}
      style={{ pointerEvents: likedDisabled ? "none" : "auto" }}
    >
      <div className="comment__info--items-item-icon items__item--icon">
        {liked ? <LikeFill /> : <LikeSvg />}
      </div>
      <div className="comment__info--items-item-count items__item--count">
        <span>{likes}</span>
      </div>
    </li>
  );
};

export default CommentLikes;

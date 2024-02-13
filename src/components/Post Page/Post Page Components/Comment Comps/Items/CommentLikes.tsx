import * as React from "react";
import { ReactComponent as LikeSvg } from "../../../../../assets/likes.svg";
import { ReactComponent as LikeFill } from "../../../../../assets/likesFill.svg";
import { IPostComment } from "../../../../../ts/interfaces/post_interfaces";
import useAppContext from "../../../../../hooks/useAppContext";

interface ICommentLikesProps {
  com: IPostComment;
}

const CommentLikes: React.FunctionComponent<ICommentLikesProps> = (props) => {
  const [likes, setLikes] = React.useState<number>(props.com.likes!);
  const [likedDisabled, setLikedDisabled] = React.useState<boolean>(false);
  const { currentUser } = useAppContext();
  return (
    <li className="comment__info--items-item items__item">
      <div className="comment__info--items-item-icon items__item--icon">
        <LikeSvg />
      </div>
      <div className="comment__info--items-item-count items__item--count">
        <span>{likes}</span>
      </div>
    </li>
  );
};

export default CommentLikes;

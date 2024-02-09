import * as React from "react";
import { ReactComponent as Likes } from "../../../../assets/likes.svg";

interface IPostLikesProps {
  likes: number;
}

const PostLikes: React.FunctionComponent<IPostLikesProps> = (props) => {
  return (
    <li className="post__items--item items__item">
      <div className="post__items--item-icon items__item--icon">
        <Likes />
      </div>
      <div className="post__items--item-count items__item--count">
        <span>{props.likes}</span>
      </div>
    </li>
  );
};

export default PostLikes;

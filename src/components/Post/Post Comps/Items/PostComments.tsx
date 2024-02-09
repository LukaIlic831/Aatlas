import * as React from "react";
import { ReactComponent as Comments } from "../../../../assets/comments.svg";

interface IPostCommentsProps {
  comments: number;
}

const PostComments: React.FunctionComponent<IPostCommentsProps> = (props) => {
  return (
    <li className="post__items--item items__item">
      <div className="post__items--item-icon items__item--icon">
        <Comments/>
      </div>
      <div className="post__items--item-count items__item--count">
        <span>{props.comments}</span>
      </div>
    </li>
  );
};

export default PostComments;

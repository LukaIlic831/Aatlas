import * as React from "react";

interface IPostLikesProps {
    likes: number;
}

const PostLikes: React.FunctionComponent<IPostLikesProps> = (props) => {
  return (
    <li className="post__items--item items__item">
      <div className="post__items--item-icon items__item--icon">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        </svg>
      </div>
      <div className="post__items--item-count items__item--count">
        <span>{props.likes}</span>
      </div>
    </li>
  );
};

export default PostLikes;

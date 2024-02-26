import * as React from "react";
import { ReactComponent as TrashSvg } from "../../../../assets/trash.svg";

interface IPostOptionDeleteProps {}

const PostOptionDelete: React.FunctionComponent<IPostOptionDeleteProps> = (
  props
) => {
  return (
    <li className="post__option">
      <div className="post__option--button">
        <div className="post__option--icon">
          <TrashSvg />
        </div>
        <p>Delete</p>
      </div>
    </li>
  );
};

export default PostOptionDelete;

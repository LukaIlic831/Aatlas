import * as React from "react";
import { ReactComponent as EditSvg } from "../../../../assets/edit.svg";
import { IPost } from "../../../../ts/interfaces/post_interfaces";
import { useNavigate } from "react-router-dom";

interface IPostOptionEditProps {
  post: IPost;
}

const PostOptionEdit: React.FunctionComponent<IPostOptionEditProps> = (
  props
) => {
  const navigate = useNavigate();

  return (
    <li
      className="post__option"
      onClick={() =>
        navigate("/edit-post", {
          state: {
            postForEdit: props.post,
          },
        })
      }
    >
      <div className="post__option--button">
        <div className="post__option--icon">
          <EditSvg />
        </div>
        <p>Edit</p>
      </div>
    </li>
  );
};

export default PostOptionEdit;

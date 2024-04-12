import * as React from "react";
import { ReactComponent as TrashSvg } from "../../../../assets/trash.svg";
import { IPost } from "../../../../ts/interfaces/post_interfaces";
import handleDeletePost from "../../../../features/psotOptions/deletePost";
import useAppContext from "../../../../hooks/useAppContext";
import { useNavigate, useParams } from "react-router-dom";

interface IPostOptionDeleteProps {
  post: IPost;
}

const PostOptionDelete: React.FunctionComponent<IPostOptionDeleteProps> = (
  props
) => {
  const { setRefetch } = useAppContext();
  const navigate = useNavigate();
  const { postId } = useParams();
  const handleClick = () => {
    handleDeletePost(props.post.id ,setRefetch)
      .then(() => postId && navigate(-1));
  };
  return (
    <li className="post__option" onClick={handleClick}>
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

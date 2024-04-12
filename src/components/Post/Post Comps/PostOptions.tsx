import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import PostOptionDelete from "./Options/PostOptionDelete";
import PostOptionEdit from "./Options/PostOptionEdit";
import { IPost } from "../../../ts/interfaces/post_interfaces";
interface IPostOptionsProps {
  post: IPost;
}

const PostOptions: React.FunctionComponent<IPostOptionsProps> = (props) => {
  return (
    <ul className="post__options">
      <PostOptionDelete post={props.post} />
      <PostOptionEdit post={props.post} />
    </ul>
  );
};

export default PostOptions;

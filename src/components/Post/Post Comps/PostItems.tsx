import * as React from "react";
import PostLikes from "./Items/PostLikes";
import PostComments from "./Items/PostComments";
import { IPost } from "../../../ts/interfaces/post_interfaces";

interface IPostItemsProps {
  likes: number;
  comments: number;
  likedPostFromCurrentUser:boolean;
  post:IPost;
}

const PostItems: React.FunctionComponent<IPostItemsProps> = (props) => {
  return (
    <ul className="post__items items">
      <PostLikes likes={props.likes} likedPostFromCurrentUser={props.likedPostFromCurrentUser} post={props.post}/>
      <PostComments comments={props.comments}/>
    </ul>
  );
};

export default PostItems;

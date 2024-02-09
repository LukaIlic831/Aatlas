import * as React from "react";
import PostLikes from "./Items/PostLikes";
import PostComments from "./Items/PostComments";

interface IPostItemsProps {
  likes: number;
  comments: number;
}

const PostItems: React.FunctionComponent<IPostItemsProps> = (props) => {
  return (
    <ul className="post__items items">
      <PostLikes likes={props.likes}/>
      <PostComments comments={props.comments}/>
    </ul>
  );
};

export default PostItems;

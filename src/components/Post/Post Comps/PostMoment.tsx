import * as React from "react";
import { IPost } from "../../../ts/interfaces/post_interfaces";
import Moment from "react-moment";

interface IPostMomentProps {
  post: IPost;
}

const PostMoment: React.FunctionComponent<IPostMomentProps> = (props) => {
  return (
    <>
      {props.post.updated_at ? " ○ Updated " : " ○ "}
      {props.post.updated_at ? (
        <Moment
          fromNow
          style={{
            fontSize: "14px",
            color: "rgb(107 114 128/1)",
          }}
        >
          {props.post?.updated_at!}
        </Moment>
      ) : (
        <Moment
          fromNow
          style={{
            fontSize: "14px",
            color: "rgb(107 114 128/1)",
          }}
        >
          {props.post?.date_created!}
        </Moment>
      )}
    </>
  );
};

export default PostMoment;

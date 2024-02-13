import * as React from "react";
import { IPostComment } from "../../../ts/interfaces/post_interfaces";
import Comment from "./Comment";

interface ICommentsProps {
  comments: IPostComment[];
}

const Comments: React.FunctionComponent<ICommentsProps> = (props) => {
  return (
    <div className="comments">
      <div className="comments__counter">
        <p>
          <span>{props.comments.length}</span>
          {props.comments.length == 1 ? " comment" : " comments"}
        </p>
      </div>
      {props.comments
        .filter((comment) => comment.parent === null)
        .sort(
          (a, b) =>
            new Date(b.date_created!).getTime() -
            new Date(a.date_created!).getTime()
        )
        .map((comment, index) => (
          <Comment com={comment} index={index} />
        ))}
    </div>
  );
};

export default Comments;

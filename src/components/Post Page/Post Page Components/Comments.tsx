import * as React from "react";
import Comment from "./Comment";
import { IPostComment } from "../../../ts/interfaces/comment_interfaces";

interface ICommentsProps {
  comments: IPostComment[];
  fetchComments: () => Promise<void>;
}

const Comments: React.FunctionComponent<ICommentsProps> = (props) => {
  const getReplies = (parentCommentId: string) => {
    return props.comments.filter(
      (comment) => comment.parent === parentCommentId
    );
  };
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
          <Comment
            com={comment}
            index={index}
            replies={getReplies(comment.id)}
            fetchComments={props.fetchComments}
            getReplies={getReplies}
          />
        ))}
    </div>
  );
};

export default Comments;

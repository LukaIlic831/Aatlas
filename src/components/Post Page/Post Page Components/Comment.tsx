import * as React from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router";
import CommentItems from "./Comment Comps/CommentItems";
import { IPostComment } from "../../../ts/interfaces/comment_interfaces";
import useAppContext from "../../../hooks/useAppContext";

interface ICommentProps {
  com: IPostComment;
  index: number;
}

const Comment: React.FunctionComponent<ICommentProps> = (props) => {
  const { currentUser } = useAppContext();
  return (
    <div className="comment">
      <div className="comment__align">
        <div className="comment__line">
          <div className="comment__line--border"></div>
        </div>
        <div className="comment__wrapper">
          <div className="comment__info">
            <div className="comment__info--desc">
              <div className="comment__info--desc-username">
                <p>{props.com.user?.username}</p>
              </div>
              <div className="comment__info--desc-date">
                <Moment
                  fromNow
                  style={{
                    color: "rgb(107 114 128/1)",
                  }}
                >
                  {props.com.date_created!}
                </Moment>
              </div>
            </div>
            <div className="comment__info--text">
              <p>{props.com.description}</p>
            </div>
            <CommentItems
              com={props.com}
              likedCommentFromCurrentUser={Boolean(
                props.com.likedComment.find(
                  (likedComment) =>
                    likedComment.post_id == props.com.post_id &&
                    likedComment.user_id == currentUser?.user.id
                )
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

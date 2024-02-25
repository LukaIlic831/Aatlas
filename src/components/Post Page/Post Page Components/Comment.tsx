import * as React from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router";
import CommentItems from "./Comment Comps/CommentItems";
import { IPostComment } from "../../../ts/interfaces/comment_interfaces";
import useAppContext from "../../../hooks/useAppContext";
import CommentTextarea from "./Comment Comps/CommentTextarea";

interface ICommentProps {
  com: IPostComment;
  replies: IPostComment[];
  index: number;
  fetchComments: () => Promise<void>;
  getReplies: (parentCommentId: string) => IPostComment[];
}

const Comment: React.FunctionComponent<ICommentProps> = (props) => {
  const { currentUser } = useAppContext();
  const [openCommentTextarea, setOpenCommentTextarea] =
    React.useState<boolean>(false);
  const [blockReply, setBlockReply] = React.useState<boolean>(Boolean(!props.com.description));
  const [hideReplies, setHideReplies] = React.useState<boolean>(false);
  const [action, setAction] = React.useState<string>("addReply");
  const replies = props.getReplies(props.com.id);
  return (
    <div className="comment">
      <div className="comment__align">
        <div className="comment__line">
          <div
            className="comment__line--border"
            onClick={() => (
              setHideReplies(!hideReplies), setOpenCommentTextarea(false)
            )}
          ></div>
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
              <p>
                {props.com.description ? props.com.description : "[Deleted]"}
              </p>
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
              openCommentTextarea={openCommentTextarea}
              setOpenCommentTextarea={setOpenCommentTextarea}
              fetchComments={props.fetchComments}
              setAction={setAction}
              action={action}
              setBlockReply={setBlockReply}
              blockReply={blockReply}
            />
            {openCommentTextarea && (
              <CommentTextarea
                action={action}
                postId={props.com.post_id!}
                commentId={props.com.id}
                currentUserId={currentUser?.user.id!}
                fetchComments={props.fetchComments}
                setOpenCommentTextarea={setOpenCommentTextarea}
              />
            )}
            <div className="sub-comment">
              {!hideReplies &&
                replies.map((comment, index) => (
                  <Comment
                    com={comment}
                    replies={[]}
                    index={index}
                    fetchComments={props.fetchComments}
                    getReplies={props.getReplies}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

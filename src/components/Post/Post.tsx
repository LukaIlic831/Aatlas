import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import PostOptions from "../PostOptions";
import Moment from "react-moment";
import { IPost } from "../../ts/interfaces/post_interfaces";
import useAppContext from "../../hooks/useAppContext";
import PostImages from "./Post Comps/PostImagesWrapper";
import PostLocation from "./Post Comps/PostLocation";
import PostItems from "./Post Comps/PostItems";
interface IPostProps {
  post: IPost;
}

const Post: React.FunctionComponent<IPostProps> = (props) => {
  const { currentUser } = useAppContext();
  const [optionsVisible, setOptionsVisible] = React.useState<boolean>(false);
  const handleOptions = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOptionsVisible(!optionsVisible);
  };
  return (
    <div className="post">
      <div className="post__desc">
        <div className="post__desc--username">
          <div className="post__desc--username-name">
            <p>{props.post.user?.username}</p>
          </div>
          <div className="post__desc--username-para">
            <p>
              <span>{props.post.category_id}</span>
              {" ○ "}
              <Moment
                fromNow
                style={{
                  fontSize: "14px",
                  color: "rgb(107 114 128/1)",
                }}
              >
                {props.post?.date_created!}
              </Moment>
            </p>
          </div>
        </div>
        {props.post.creator === currentUser?.user.id && (
          <div className="post__desc--options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={(e) => handleOptions(e)}
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
            {optionsVisible && <PostOptions />}
          </div>
        )}
      </div>
      <div className="post__title">
        <h1>{props.post.title}</h1>
      </div>
      <div className="post__text">
        <p>{props.post.description}</p>
      </div>
      {props.post.image?.length! > 0 && <PostImages post={props.post} />}
      {props.post.location_id && <PostLocation post={props.post} />}
      <PostItems likes={props.post.likes!} comments={props.post.comments!} />
    </div>
  );
};

export default Post;

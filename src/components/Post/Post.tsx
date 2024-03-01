import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import PostOptions from "./Post Comps/PostOptions";
import Moment from "react-moment";
import { IPost } from "../../ts/interfaces/post_interfaces";
import useAppContext from "../../hooks/useAppContext";
import PostImages from "./Post Comps/PostImagesWrapper";
import PostLocation from "./Post Comps/PostLocation";
import { ReactComponent as DotsSvg } from "../../assets/optionsdots.svg";
import PostItems from "./Post Comps/PostItems";
import PostMoment from "./Post Comps/PostMoment";
interface IPostProps {
  post: IPost;
}

const Post: React.FunctionComponent<IPostProps> = (props) => {
  const { currentUser } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [optionsVisible, setOptionsVisible] = React.useState<boolean>(false);
  const handleOptions = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOptionsVisible(!optionsVisible);
  };

  const handleClickPost = () => {
    !location.pathname.includes("/post") && navigate(`/post/${props.post?.id}`);
  };
  const handleUsernameClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    navigate(`/profile/${props.post.user?.id}`);
  };

  return (
    <div className="post" onClick={handleClickPost}>
      <div className="post__desc">
        <div className="post__desc--username">
          <div
            className="post__desc--username-name"
            onClick={(e) => handleUsernameClick(e)}
          >
            <p>{props.post.user?.username}</p>
          </div>
          <div className="post__desc--username-para">
            <p>
              <span>{props.post.category_id}</span>
              <PostMoment post={props.post} />
            </p>
          </div>
        </div>
        {props.post.creator === currentUser?.user.id && (
          <div
            className="post__desc--options"
            onClick={(e) => handleOptions(e)}
          >
            <DotsSvg />
            {optionsVisible && <PostOptions post={props.post} />}
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
      <PostItems
        post={props.post}
        likes={props.post.likes!}
        comments={props.post.comments!}
        likedPostFromCurrentUser={Boolean(
          props.post.likedPost?.find(
            (likedPost) =>
              likedPost.post_id == props.post.id &&
              likedPost.user_id == currentUser?.user.id
          )
        )}
      />
    </div>
  );
};

export default Post;

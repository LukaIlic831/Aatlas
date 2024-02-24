import * as React from "react";
import { ReactComponent as LikeSvg } from "../../../../assets/likes.svg";
import { ReactComponent as LikeFill } from "../../../../assets/likesFill.svg";
import addLikedPost from "../../../../features/postLikes/addLike";
import { IPost } from "../../../../ts/interfaces/post_interfaces";
import useAppContext from "../../../../hooks/useAppContext";
import deleteLikedPost from "../../../../features/postLikes/deleteLike";
import toastError from "../../../../toasts/toastError";

interface IPostLikesProps {
  likes: number;
  likedPostFromCurrentUser: boolean;
  post: IPost;
}

const PostLikes: React.FunctionComponent<IPostLikesProps> = (props) => {
  const [likes, setLikes] = React.useState<number>(props.likes);
  const [liked, setLiked] = React.useState<boolean>(
    props.likedPostFromCurrentUser
  );
  const [likedDisabled, setLikedDisabled] = React.useState<boolean>(false);
  const { currentUser } = useAppContext();
  const likePost = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    if (!currentUser?.user.id) {
      toastError.actionBeforeSignInError();
    } else if (!likedDisabled) {
      setLikedDisabled(true);
      if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
        setLiked(false);
        deleteLikedPost(
          currentUser?.user.id!,
          props.post.id,
          likes,
          setLikedDisabled
        );
      } else {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
        addLikedPost(
          currentUser?.user.id!,
          props.post.id,
          likes,
          setLikedDisabled
        );
      }
    }
  };

  return (
    <li className="post__items--item items__item" onClick={(e) => likePost(e)}>
      <div className="post__items--item-icon items__item--icon">
        {liked ? <LikeFill /> : <LikeSvg />}
      </div>
      <div className="post__items--item-count items__item--count">
        <span>{likes}</span>
      </div>
    </li>
  );
};

export default PostLikes;

import * as React from "react";
import PostImages from "./Images/PostImages";
import { IPost } from "../../../ts/interfaces/post_interfaces";

interface IPostImagesWrapperProps {
  post: IPost;
}

const PostImagesWrapper: React.FunctionComponent<IPostImagesWrapperProps> = (
  props
) => {
  return (
    <div className="post__image post__map">
      {props.post?.image?.length! > 0 && (
        <div
          className="post__image--first-block"
          style={{
            gridTemplateColumns: `repeat(${
              props.post.image?.slice(0, 2).length
            }, 1fr)`,
          }}
        >
          {props.post?.image?.map(
            (img, index) => index < 2 && <PostImages imageUrl={img.imageUrl} />
          )}
        </div>
      )}
      {props.post?.image?.length! > 2 && (
        <div
          className="post__image--second-block"
          style={{
            gridTemplateColumns: `repeat(${
              props.post.image?.slice(2).length
            }, 1fr)`,
          }}
        >
          {props.post?.image?.map(
            (img, index) => index >= 2 && <PostImages imageUrl={img.imageUrl} />
          )}
        </div>
      )}
    </div>
  );
};

export default PostImagesWrapper;

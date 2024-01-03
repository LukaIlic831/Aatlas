import * as React from "react";
import PostImageSkeleton from "../../../Skeleton Loaders/PostImageSkeleton";
import usePostImageLoad from "../../../../hooks/usePostImageLoad";

interface IPostImagesProps {
  imageUrl: string;
}

const PostImages: React.FunctionComponent<IPostImagesProps> = (props) => {
  const image = usePostImageLoad(props.imageUrl);
  return (
    <>
      {!image ? (
        <PostImageSkeleton />
      ) : (
        <img src={props.imageUrl} alt="" style={{ opacity: 1 }} />
      )}
    </>
  );
};

export default PostImages;

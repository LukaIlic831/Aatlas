import * as React from "react";

interface IPostImageSkeletonProps {}

const PostImageSkeleton: React.FunctionComponent<IPostImageSkeletonProps> = (
  props
) => {
  return <div className="post__image--skeleton"></div>;
};

export default PostImageSkeleton;

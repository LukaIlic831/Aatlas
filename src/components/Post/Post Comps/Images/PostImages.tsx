import * as React from "react";
import PostImageSkeleton from "../../../Skeleton Loaders/PostImageSkeleton";
import usePostImageLoad from "../../../../hooks/usePostImageLoad";
import ViewImageBlock from "../../../ViewImageBlock";
import { useLocation } from "react-router-dom";

interface IPostImagesProps {
  imageUrl: string;
}

const PostImages: React.FunctionComponent<IPostImagesProps> = (props) => {
  const location = useLocation();
  const image = usePostImageLoad(props.imageUrl);
  const postImageRef = React.useRef<HTMLDivElement | null>(null);
  const [imageVisible, setImageVisible] = React.useState<boolean>(false);
  const [imageSrc, setImageSrc] = React.useState<string>("");
  const handleImageClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (
      !location.pathname.includes("/category") &&
      !location.pathname.includes("/profile")
    ) {
      setImageSrc((event.target as HTMLImageElement).src);
      setImageVisible(true);
    }
  };
  return (
    <>
      {!image ? (
        <PostImageSkeleton />
      ) : (
        <img
          src={props.imageUrl}
          alt=""
          style={{ opacity: 1 }}
          onClick={(e) => handleImageClick(e)}
        />
      )}
      {imageVisible && (
        <ViewImageBlock
          postImageRef={postImageRef}
          imageSrc={imageSrc}
          setImageVisible={setImageVisible}
        />
      )}
    </>
  );
};

export default PostImages;

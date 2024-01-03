import * as React from "react";

const usePostImageLoad = (imageUrl: string) => {
  const [img, setImg] = React.useState<HTMLImageElement | null>(null);

  React.useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  }, []);
  return img;
};

export default usePostImageLoad;

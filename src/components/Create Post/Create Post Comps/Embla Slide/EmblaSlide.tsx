import * as React from "react";
import { IImagePreview } from "../../../../ts/interfaces/create_post_interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IEmblaSlideProps {
  index: number;
  img: IImagePreview;
  setImagePreview: React.Dispatch<React.SetStateAction<IImagePreview[]>>;
  setImage: React.Dispatch<React.SetStateAction<File[]>>;
}

const EmblaSlide: React.FunctionComponent<IEmblaSlideProps> = (props) => {
  const [showClose, setShowClose] = React.useState<boolean>(false);
  return (
    <div className="embla__slide" key={props.index}>
      <LazyLoadImage
        className="embla__slide__img"
        src={props.img.imageUrl}
        effect="blur"
        alt={props.img.imageUrl}
        key={props.img.imageUrl}
        threshold={100}
        onLoad={() => setShowClose(true)}
      />
      {showClose && (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="close close-image"
          height="1.8em"
          width="1.8em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
        </svg>
      )}
    </div>
  );
};

export default EmblaSlide;

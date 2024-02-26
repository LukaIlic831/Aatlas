import * as React from "react";
import { IImagePreview } from "../../../ts/interfaces/create_post_interfaces";
import useEmblaCarousel from "embla-carousel-react";
import EmblaSlide from "./Embla Slide/EmblaSlide";
import ViewImageBlock from "../../ViewImageBlock";

interface IShowImageBlockProps {
  imagePreview: IImagePreview[];
  setImagePreview: React.Dispatch<React.SetStateAction<IImagePreview[]>>;
  setImage: React.Dispatch<React.SetStateAction<File[]>>;
  setLocationStateImages: React.Dispatch<React.SetStateAction<IImagePreview[]>>;
}

const ShowImageBlock: React.FunctionComponent<IShowImageBlockProps> = (
  props
) => {
  const [emblaRef] = useEmblaCarousel({});
  const imageRef = React.useRef<HTMLDivElement | null>(null);
  const [imageVisible, setImageVisible] = React.useState<boolean>(false);
  const [imageSrc, setImageSrc] = React.useState<string>("");
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {props.imagePreview?.map((img, index) => (
            <EmblaSlide
              index={index}
              img={img}
              setImagePreview={props.setImagePreview}
              setImage={props.setImage}
              setImageSrc={setImageSrc}
              setImageVisible={setImageVisible}
              setLocationStateImages={props.setLocationStateImages}
            />
          ))}
        </div>
      </div>
      {imageVisible && (
        <ViewImageBlock
          postImageRef={imageRef}
          imageSrc={imageSrc}
          setImageVisible={setImageVisible}
        />
      )}
    </div>
  );
};

export default ShowImageBlock;

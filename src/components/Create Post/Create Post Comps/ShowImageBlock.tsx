import * as React from "react";
import { IImagePreview } from "../../../ts/interfaces/create_post_interfaces";
import useEmblaCarousel from "embla-carousel-react";
import EmblaSlide from "./Embla Slide/EmblaSlide";

interface IShowImageBlockProps {
  imagePreview: IImagePreview[];
  setImagePreview: React.Dispatch<React.SetStateAction<IImagePreview[]>>;
  setImage: React.Dispatch<React.SetStateAction<File[]>>;
}

const ShowImageBlock: React.FunctionComponent<IShowImageBlockProps> = (
  props
) => {
  const [emblaRef] = useEmblaCarousel({});
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowImageBlock;

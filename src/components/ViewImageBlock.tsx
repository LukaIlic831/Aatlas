import * as React from "react";

interface IViewImageBlockProps {
  postImageRef: React.MutableRefObject<HTMLDivElement | null>;
  imageSrc: string;
  setImageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewImageBlock: React.FunctionComponent<IViewImageBlockProps> = (
  props
) => {
  React.useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!props.postImageRef.current?.contains(e.target as Node)) {
        props.setImageVisible(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [props.postImageRef]);
  return (
    <div className="view__image--wrapper">
      <div className="view__image">
        <div className="view__image--block" ref={props.postImageRef}>
          <img src={props.imageSrc} alt="" className="view__img" />
        </div>
      </div>
    </div>
  );
};

export default ViewImageBlock;

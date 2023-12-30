import * as React from "react";

interface IViewImageBlockProps {
  openImageRef: React.MutableRefObject<HTMLDivElement | null>;
  viewImage: string;
}

const ViewImageBlock: React.FunctionComponent<IViewImageBlockProps> = (
  props
) => {
  return (
    <div className="view__image--wrapper">
      <div className="view__image">
        <div className="view__image--block" ref={props.openImageRef}>
          <img src={props.viewImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewImageBlock;

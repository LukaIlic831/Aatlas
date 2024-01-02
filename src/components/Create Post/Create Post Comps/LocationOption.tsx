import { SearchBox } from "@mapbox/search-js-react";
import * as React from "react";
import {
  INewPlace,
  IViewPort,
} from "../../../ts/interfaces/create_post_interfaces";
import handleRetrive from "../../../features/createPost/mapBox/addLocation";

interface ILocationOptionProps {
  openLocationOptionRef: React.MutableRefObject<HTMLDivElement | null>;
  setViewPort: React.Dispatch<React.SetStateAction<IViewPort>>;
  viewPort: IViewPort;
  setNewPlace: React.Dispatch<React.SetStateAction<INewPlace | null>>;
  setShowImagePreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationOption: React.FunctionComponent<ILocationOptionProps> = (
  props
) => {
  return (
    <div
      className="create-post__block--icons-open"
      ref={props.openLocationOptionRef}
    >
      <div className="create-post__block--icons-open-input-text">
        {/* @ts-ignore */}
        <SearchBox
          accessToken={process.env.REACT_APP_MAPBOX_KEY!}
          value=""
          onRetrieve={(res) =>
            handleRetrive(
              res,
              props.setViewPort,
              props.viewPort,
              props.setNewPlace,
              props.setShowImagePreview
            )
          }
        />
      </div>
    </div>
  );
};

export default LocationOption;

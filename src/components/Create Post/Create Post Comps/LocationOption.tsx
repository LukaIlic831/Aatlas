import { SearchBox } from "@mapbox/search-js-react";
import * as React from "react";

interface ILocationOptionProps {
  openLocationOptionRef: React.MutableRefObject<HTMLDivElement | null>;
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
        <SearchBox accessToken={process.env.REACT_APP_MAPBOX_KEY!} value="" />
      </div>
    </div>
  );
};

export default LocationOption;

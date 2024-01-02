import * as React from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import {
  INewPlace,
  IViewPort,
} from "../../../ts/interfaces/create_post_interfaces";
import Pin from "../../Pin";
import "mapbox-gl/dist/mapbox-gl.css";
import changeLocation from "../../../features/createPost/mapBox/changeLocation";

interface IMapProps {
  viewPort: IViewPort;
  setViewPort: React.Dispatch<React.SetStateAction<IViewPort>>;
  newPlace: INewPlace;
  setNewPlace: React.Dispatch<React.SetStateAction<INewPlace | null>>;
}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  return (
    <div className="create-post__block--map">
      <ReactMapGL
        {...props.viewPort}
        onMove={(viewPort) => props.setViewPort(viewPort.viewState)}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY!}
        mapStyle={process.env.REACT_APP_MAP_STYLE!}
        dragRotate={false}
        onClick={(e) => changeLocation(e, props.setNewPlace)}
      >
        <Marker
          latitude={props.newPlace.latitude}
          longitude={props.newPlace.longitude}
          anchor="bottom"
        >
          <Pin size={20} />
        </Marker>
        <NavigationControl />
      </ReactMapGL>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        className="close close-map"
        height="1.8em"
        width="1.8em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
      </svg>
    </div>
  );
};

export default Map;

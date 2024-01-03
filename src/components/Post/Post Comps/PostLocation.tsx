import * as React from "react";
import { IPost } from "../../../ts/interfaces/post_interfaces";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "../../Pin";
import { useLocation } from "react-router-dom";
interface IPostLocationProps {
  post: IPost;
}

const PostLocation: React.FunctionComponent<IPostLocationProps> = (props) => {
  const location = useLocation();
  return (
    <div className="post__image--map">
      <ReactMapGL
        longitude={props.post.location?.longitude!}
        latitude={props.post.location?.latitude!}
        zoom={props.post.location?.zoom!}
        cursor={
          !location.pathname.includes("/category") &&
          !location.pathname.includes("/profile")
            ? "default"
            : "pointer"
        }
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY!}
        mapStyle={process.env.REACT_APP_MAP_STYLE!}
        scrollZoom={false}
      >
        <Marker
          longitude={props.post.location?.longitude!}
          latitude={props.post.location?.latitude!}
          anchor="bottom"
          style={{
            cursor:
              !location.pathname.includes("/category") &&
              !location.pathname.includes("/profile")
                ? "default"
                : "pointer",
          }}
        >
          <Pin size={20} />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default PostLocation;

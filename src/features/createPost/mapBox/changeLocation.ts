import { INewPlace } from "../../../ts/interfaces/create_post_interfaces";

const changeLocation = (
  e: mapboxgl.MapLayerMouseEvent,
  setNewPlace: React.Dispatch<React.SetStateAction<INewPlace | null>>
) => {
  setNewPlace({
    longitude: e.lngLat.lng,
    latitude: e.lngLat.lat,
  });
};

export default changeLocation;

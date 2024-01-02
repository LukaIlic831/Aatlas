import { SearchBoxRetrieveResponse } from "@mapbox/search-js-core";
import {
  INewPlace,
  IViewPort,
} from "../../../ts/interfaces/create_post_interfaces";
const handleRetrive = (
  res: SearchBoxRetrieveResponse,
  setViewPort: React.Dispatch<React.SetStateAction<IViewPort>>,
  viewPort: IViewPort,
  setNewPlace: React.Dispatch<React.SetStateAction<INewPlace | null>>,
  setShowImagePreview: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setViewPort({
    ...viewPort,
    longitude: res.features[0].properties.coordinates.longitude,
    latitude: res.features[0].properties.coordinates.latitude,
  });
  setNewPlace({
    longitude: res.features[0].properties.coordinates.longitude,
    latitude: res.features[0].properties.coordinates.latitude,
  });
  setShowImagePreview(false);
};

const mapBoxFeatures = {
  handleRetrive,
};
export default mapBoxFeatures;

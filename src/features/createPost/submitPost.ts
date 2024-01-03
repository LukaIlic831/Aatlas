import { NavigateFunction } from "react-router-dom";
import supabase from "../../supabase";
import toastError from "../../toasts/toastError";
import toastSuccess from "../../toasts/toastSuccess";
import {
  IImagePreview,
  INewPlace,
  IPostCategories,
  IViewPort,
} from "../../ts/interfaces/create_post_interfaces";
import { v4 as uuid } from "uuid";

interface IImageIds {
  id: string;
  name: string;
}

const submitPost = async (
  event: React.FormEvent<HTMLFormElement>,
  categories: IPostCategories,
  newPlace: INewPlace,
  image: File[],
  viewPort: IViewPort,
  currentUserId: string,
  title: string,
  desc: string,
  navigate: NavigateFunction
) => {
  event.preventDefault();
  if (categories.selectedCategory) {
    let publicImageUrl: IImagePreview[] = [];
    let locationId: string | null = null;
    if (newPlace) {
      locationId = await addLocation(viewPort, newPlace);
    } else {
      let imageIds: IImageIds[] = [];
      await Promise.all(
        image.map((img) => uploadImageInStorage(img, imageIds))
      );
      publicImageUrl = imageIds.map((imageId) => ({
        imageUrl: getUrlFromUploadImage(imageId.id),
        name: imageId.name,
      }));
    }
    addPost(
      currentUserId,
      title,
      desc,
      publicImageUrl,
      categories.selectedCategory,
      locationId
    );
    navigate("/");
  } else {
    toastError.categoryNotSelected();
  }
};

const addLocation = async (viewPort: IViewPort, newPlace: INewPlace) => {
  const { error, data } = await supabase
    .from("location")
    .insert({
      zoom: viewPort.zoom,
      longitude: newPlace?.longitude,
      latitude: newPlace?.latitude,
    })
    .select("id");
  error && alert(error.message);
  return data![0].id;
};

const getUrlFromUploadImage = (imageId: string) => {
  return supabase.storage.from("Post Images").getPublicUrl(imageId).data
    .publicUrl;
};

const uploadImageInStorage = async (
  img: File,
  imageIds: { id: string; name: string }[]
) => {
  let id = uuid();
  let name = img.name;
  const { error } = await supabase.storage.from("Post Images").upload(id, img, {
    cacheControl: "3600",
    upsert: false,
    contentType: "image/webp",
  });
  imageIds.push({ id, name });
  error && alert(error.message);
};

const addPost = async (
  currentUserId: string,
  title: string,
  desc: string,
  publicImageUrl: IImagePreview[],
  categoryId: string,
  locationId: string | null
) => {
  const { error } = await supabase.from("post").insert({
    creator: currentUserId,
    title: title,
    description: desc,
    likes: 0,
    image: JSON.parse(JSON.stringify(publicImageUrl)),
    comments: 0,
    category_id: categoryId,
    date_created: new Date().toISOString(),
    location_id: locationId,
  });
  error ? alert(error.message) : toastSuccess.postAddedSuccessfully();
};

export default submitPost;

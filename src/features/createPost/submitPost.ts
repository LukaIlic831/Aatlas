import { NavigateFunction } from "react-router-dom";
import supabase from "../../supabase";
import toastError from "../../toasts/toastError";
import {
  IImagePreview,
  INewPlace,
  IPostCategories,
  IViewPort,
} from "../../ts/interfaces/create_post_interfaces";
import { v4 as uuid } from "uuid";
import addPost from "./addPost";
import updatePost from "./updatePost";

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
  navigate: NavigateFunction,
  pathname: string,
  postId: string | undefined,
  locationStateImages: IImagePreview[]
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

    pathname === "/create-post"
      ? addPost(
          currentUserId,
          title,
          desc,
          publicImageUrl,
          categories.selectedCategory,
          locationId
        )
      : postId &&
        updatePost(
          title,
          desc,
          publicImageUrl,
          categories.selectedCategory,
          locationId,
          postId,
          locationStateImages
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

export default submitPost;

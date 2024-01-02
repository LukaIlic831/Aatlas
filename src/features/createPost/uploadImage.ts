import toastError from "../../toasts/toastError";
import {
  IImagePreview,
  INewPlace,
} from "../../ts/interfaces/create_post_interfaces";

const findIfImageExsist = (files: FileList | null, image: File[]) => {
  let imageExsist = false;
  files &&
    Array.from(files).map((file) => {
      if (!imageExsist) {
        image.find((img) => img.name === file.name) && (imageExsist = true);
      }
    });
  return imageExsist;
};

const uploadImage = (
  event: React.ChangeEvent<HTMLInputElement>,
  imagePreview: IImagePreview[],
  setImage: React.Dispatch<React.SetStateAction<File[]>>,
  image: File[],
  setImagePreview: React.Dispatch<React.SetStateAction<IImagePreview[]>>,
  setShowImagePreview: React.Dispatch<React.SetStateAction<boolean>>,
  setNewPlace: React.Dispatch<React.SetStateAction<INewPlace | null>>
) => {
  let imageExsist = findIfImageExsist(event.target.files, image);
  if (
    !imageExsist &&
    event.target.files?.length! < 5 &&
    event.target.files?.length! + imagePreview.length < 5
  ) {
    setImage([...image, ...event.target.files!]);

    let imagePreviewObject: IImagePreview[] = Array.from(
      event.target.files!
    ).map((file) => ({
      imageUrl: URL.createObjectURL(file),
      name: file.name,
    }));

    setImagePreview([...imagePreview, ...imagePreviewObject]);
  } else {
    !imageExsist
      ? toastError.ImageUploadLimitExceeded()
      : toastError.sameImageUpload();
  }
  setShowImagePreview(true);
  setNewPlace(null);
};

export default uploadImage;

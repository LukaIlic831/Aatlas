import { IImagePreview } from "../../ts/interfaces/create_post_interfaces";

const findIfImageExsist = (files: FileList | null, image: File[]) => {
  let imageExsist = false;
  files &&
    Array.from(files).map((file) => {
      if (!imageExsist) {
        image.find((img) => img.name === file.name);
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
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    !findIfImageExsist(event.target.files, image) &&
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
  }
  setShowImage(true);
};

export default uploadImage;

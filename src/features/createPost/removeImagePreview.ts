import { IImagePreview } from "../../ts/interfaces/create_post_interfaces";

const removeImagePreview = (
  image: IImagePreview,
  setImagePreview: React.Dispatch<React.SetStateAction<IImagePreview[]>>,
  setImage: React.Dispatch<React.SetStateAction<File[]>>,
  setLocationStateImages: React.Dispatch<React.SetStateAction<IImagePreview[]>>
) => {
  setImagePreview((prev) =>
    prev.filter((img) => img.imageUrl !== image.imageUrl)
  );
  setImage((prev) => prev.filter((img) => img.name !== image.name));
  setLocationStateImages((prev) =>
    prev.filter((img) => img.name !== image.name)
  );
};

export default removeImagePreview;

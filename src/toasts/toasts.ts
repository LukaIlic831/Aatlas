import toast from "react-hot-toast";

const ImageUploadLimitExceeded = () =>
  toast.error("You can upload a maximum of 4 images");
const sameImageUpload = () => toast.error("Image has already been uploaded");

const toastMessage = {
  ImageUploadLimitExceeded,
  sameImageUpload,
};

export default toastMessage;

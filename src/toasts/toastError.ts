import toast from "react-hot-toast";

const ImageUploadLimitExceeded = () =>
  toast.error("You can upload a maximum of 4 images");
const sameImageUpload = () => toast.error("Image has already been uploaded");
const categoryNotSelected = () =>
  toast.error("You must choose at least one category");
const actionBeforeSignInError = () => {
  toast.error("You need to Sign In first");
}

const toastError = {
  ImageUploadLimitExceeded,
  sameImageUpload,
  categoryNotSelected,
  actionBeforeSignInError
};

export default toastError;

import toast from "react-hot-toast";

const postAddedSuccessfully = () => toast.success("Post added successfully");
const postUpdatedSuccessfully = () => toast.success("Post updated successfully");
const postDeletedSuccessfully = () => toast.success("Post deleted successfully");

const toastSuccess = {
  postAddedSuccessfully,
  postUpdatedSuccessfully,
  postDeletedSuccessfully
};

export default toastSuccess;

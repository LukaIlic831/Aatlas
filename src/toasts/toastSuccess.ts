import toast from "react-hot-toast";

const postAddedSuccessfully = () => toast.success("Post added successfully");
const postUpdatedSuccessfully = () => toast.success("Post updated successfully");

const toastSuccess = {
  postAddedSuccessfully,
  postUpdatedSuccessfully
};

export default toastSuccess;

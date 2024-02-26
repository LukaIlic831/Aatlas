import toastSuccess from "../../toasts/toastSuccess";
import supabase from "../../supabase";
import { IImagePreview } from "../../ts/interfaces/create_post_interfaces";

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

export default addPost;
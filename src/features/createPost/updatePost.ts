import toastSuccess from "../../toasts/toastSuccess";
import supabase from "../../supabase";
import { IImagePreview } from "../../ts/interfaces/create_post_interfaces";

const updatePost = async (
  title: string,
  desc: string,
  publicImageUrl: IImagePreview[],
  categoryId: string,
  locationId: string | null,
  postId: string,
  locationStateImages: IImagePreview[]
) => {
  locationStateImages.map((img) => publicImageUrl.push(img));
  const { error } = await supabase
    .from("post")
    .update({
      title: title,
      description: desc,
      image: locationId ? [] : JSON.parse(JSON.stringify(publicImageUrl)),
      category_id: categoryId,
      location_id: locationId,
    })
    .eq("id", postId);
  error ? alert(error.message) : toastSuccess.postUpdatedSuccessfully();
};

export default updatePost;

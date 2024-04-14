import toastSuccess from "../../toasts/toastSuccess";
import supabase from "../../supabase";
import { IImagePreview } from "../../ts/interfaces/create_post_interfaces";
import { NavigateFunction } from "react-router-dom";

const updatePost = async (
  title: string,
  desc: string,
  publicImageUrl: IImagePreview[],
  categoryId: string,
  locationId: string | null,
  postId: string,
  locationStateImages: IImagePreview[],
  navigate: NavigateFunction
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
      updated_at: new Date().toISOString(),
    })
    .eq("id", postId);
    if(error){
      alert(error.message)
    }
    else{
      toastSuccess.postUpdatedSuccessfully();
      navigate("/");
    }
};

export default updatePost;

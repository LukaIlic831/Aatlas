import * as React from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import Category from "../Category";
import useFetchSupabase from "../../hooks/useFetchSupabase";
import { ICategory } from "../../ts/interfaces/category_interfaces";
import { IPost } from "../../ts/interfaces/post_interfaces";

interface ICategoryBlockProps {}

const CategoryBlock: React.FunctionComponent<ICategoryBlockProps> = (props) => {
  const categories = useFetchSupabase<ICategory[]>("category", "*");
  const posts = useFetchSupabase<IPost[]>("post", "*,user(*), location(*), likedPost(*)");
  const { name } = useParams();
  return (
    <div className="category-page__wrapper">
      {categories.data
        ?.filter((category) => category.id === name)
        .map((category) => (
          <Category category={category} />
        ))}
      {categories.data &&
        posts.data
          ?.filter((post) => post.category_id === name)
          .sort(
            (a, b) =>
              new Date(b.date_created!).getTime() -
              new Date(a.date_created!).getTime()
          )
          .map((post) => <Post post={post} />)}
    </div>
  );
};

export default CategoryBlock;

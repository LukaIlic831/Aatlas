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
  const posts = useFetchSupabase<IPost[]>("post", "*,user(*), location(*)");
  const { name } = useParams();
  return (
    <div className="category-page__wrapper">
      {categories.data
        ?.filter((category) => category.id === name)
        .map((category) => (
          <Category category={category} />
        ))}
      {posts.data
        ?.filter((post) => post.category_id === name)
        .map((post) => (
          <Post post={post} />
        ))}
    </div>
  );
};

export default CategoryBlock;

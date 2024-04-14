import * as React from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import Category from "../Category";
import useFetchSupabase from "../../hooks/useFetchSupabase";
import { IPost } from "../../ts/interfaces/post_interfaces";
import categoriesData from "../../data/categories";

interface ICategoryBlockProps {}

const CategoryBlock: React.FunctionComponent<ICategoryBlockProps> = (props) => {
  const posts = useFetchSupabase<IPost[]>(
    "post",
    "*,user(*), location(*), likedPost(*)"
  );
  const { categoryName } = useParams();
  return (
    <div className="category-page__wrapper">
      {categoriesData
        ?.filter((category) => category.title === categoryName)
        .map((category) => (
          <Category category={category} key={category.id} />
        ))}
      {posts.data
        ?.filter((post) => post.category_id === categoryName)
        .sort(
          (a, b) =>
            new Date(b.date_created!).getTime() -
            new Date(a.date_created!).getTime()
        )
        .map((post) => (
          <Post post={post} key={post.id} />
        ))}
    </div>
  );
};

export default CategoryBlock;

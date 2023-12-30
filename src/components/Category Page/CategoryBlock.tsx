import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import Post from "../Post";
import img from "../../assets/animals.png";
import Category from "../Category";
import useFetchSupabase from "../../hooks/useFetchSupabase";
import { ICategory } from "../../ts/interfaces/category_interfaces";

interface ICategoryBlockProps {}

const CategoryBlock: React.FunctionComponent<ICategoryBlockProps> = (props) => {
  const categories = useFetchSupabase<ICategory[]>("category");
  const { name } = useParams();
  return (
    <div className="category-page__wrapper">
      {categories.data
        ?.filter((category) => category.id === name)
        .map((category) => (
          <Category category={category} />
        ))}
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default CategoryBlock;

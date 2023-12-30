import * as React from "react";
import Category from "../Category";
import { ICategory } from "../../ts/interfaces/category_interfaces";
import useFetchSupabase from "../../hooks/useFetchSupabase";

interface ICategoriesProps {}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  const categories = useFetchSupabase<ICategory[]>("category");
  return (
    <div className="categories__wrapper">
      {categories.data?.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default Categories;

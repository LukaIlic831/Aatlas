import * as React from "react";
import Category from "../Category";
import categoriesData from "../../data/categories";

interface ICategoriesProps {}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  return (
    <div className="categories__wrapper">
      {categoriesData.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default Categories;

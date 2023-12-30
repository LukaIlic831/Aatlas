import * as React from "react";
import Category from "../Category";

interface ICategoriesProps {}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  return (
    <div className="categories__wrapper">
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;

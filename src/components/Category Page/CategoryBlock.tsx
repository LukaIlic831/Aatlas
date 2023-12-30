import * as React from "react";
import { useLocation } from "react-router-dom";
import Post from "../Post";
import img from "../../assets/animals.png";
import Category from "../Category";

interface ICategoryBlockProps {}

const CategoryBlock: React.FunctionComponent<ICategoryBlockProps> = (props) => {
  return (
    <div className="category-page__wrapper">
      <Category/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};

export default CategoryBlock;

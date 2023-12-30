import * as React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/animals.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ICategoryProps {}

const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  return (
    <div className="category">
        <LazyLoadImage
          className="create-post__block--preview-image"
          src={img}
          effect="blur"
          alt={img}
          key={img}
          threshold={100}
        />
        <div className="category__desc">
          <h1 className="category__desc--title">Title</h1>
          <h5 className="category__desc--sub-title">SubTitle</h5>
        </div>
      </div>
  );
};

export default Category;

import * as React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/animals.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ICategory } from "../ts/interfaces/category_interfaces";

interface ICategoryProps {
  category: ICategory;
}

const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="category"
      onClick={() => navigate(`/category/${props.category.id}`)}
    >
      <LazyLoadImage
        className="create-post__block--preview-image"
        src={props.category.image}
        effect="blur"
        alt={props.category.image}
        key={props.category.image}
        threshold={100}
      />
      <div className="category__desc">
        <h1 className="category__desc--title">{props.category.id}</h1>
        <h5 className="category__desc--sub-title">
          {props.category.sub_title}
        </h5>
      </div>
    </div>
  );
};

export default Category;

import * as React from "react";
import {
  IPostCategories,
  IPostCategory,
} from "../../../ts/interfaces/create_post_interfaces";

interface ISelectLabelProps {
  category: IPostCategory;
  categories: IPostCategories;
  setCategories: React.Dispatch<React.SetStateAction<IPostCategories>>;
}

const SelectLabel: React.FunctionComponent<ISelectLabelProps> = (props) => {
  return (
    <label htmlFor={props.category.id}>
      <input
        type="radio"
        name="category"
        id={props.category.id}
        className="radio-hidden"
        onChange={() =>
          props.setCategories({
            selectedCategory: props.category.text,
            categories: [...props.categories.categories],
          })
        }
        checked={props.category.text === props.categories.selectedCategory}
      />
      <div className="create-post__block--select-options">
        <span>{props.category.text}</span>
      </div>
    </label>
  );
};

export default SelectLabel;

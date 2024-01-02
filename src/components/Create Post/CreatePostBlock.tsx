import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import ButtonLoader from "../ButtonLoader";
import TextareaAutosize from "react-textarea-autosize";
import { IPostCategories } from "../../ts/interfaces/create_post_interfaces";
import SelectLabel from "./Create Post Comps/SelectLabel";

interface ICreatePostBlockProps {}

const CreatePostBlock: React.FunctionComponent<ICreatePostBlockProps> = (
  props
) => {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState<IPostCategories>({
    selectedCategory: null,
    categories: [
      {
        id: "category1",
        text: "Anime",
      },
      {
        id: "category2",
        text: "Cooking",
      },
      {
        id: "category3",
        text: "Animals",
      },
      {
        id: "category4",
        text: "Sports",
      },
      {
        id: "category5",
        text: "Other",
      },
    ],
  });
  return (
    <div className="create-post__wrapper">
      <div className="create-post__title">
        <p>Create post for</p>
        {categories.selectedCategory ? (
          <span> {categories.selectedCategory}</span>
        ) : (
          <span> -</span>
        )}
      </div>
      <form className="create-post__block">
        <div className="create-post__block--select">
          {categories.categories.map((category) => (
            <SelectLabel
              category={category}
              categories={categories}
              setCategories={setCategories}
            />
          ))}
        </div>
        <div className="create-post__block--input">
          <input type="text" placeholder="Title" maxLength={200} required />
        </div>
        <ul className="create-post__block--icons">
          <li
            style={{
              position: "relative",
            }}
          >
            <label htmlFor="imageFile">
              <input
                type="file"
                name="img"
                id="imageFile"
                multiple
                className="hidden-input-file"
                accept="image/png, image/gif, image/jpeg"
                value=""
              />
              <div className="create-post__block--icons-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.25em"
                  width="1.25em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path>
                </svg>
              </div>
            </label>
          </li>
          <li
            style={{
              position: "relative",
            }}
          >
            <div className="create-post__block--icons-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Icons"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 32 32"
              >
                <path d="M16,2c-5,0-9,4-9,8.9c0,7.4,8,13.7,8.4,13.9c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C17,24.5,25,18.3,25,10.9  C25,6,21,2,16,2z M16,14c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S17.7,14,16,14z" />
                <path d="M29.9,28.6l-4-8C25.7,20.2,25.4,20,25,20h-1.2c-2.4,3.6-5.4,6-6,6.4C17.3,26.8,16.7,27,16,27s-1.3-0.2-1.8-0.6  c-0.5-0.4-3.6-2.8-6-6.4H7c-0.4,0-0.7,0.2-0.9,0.6l-4,8c-0.2,0.3-0.1,0.7,0,1S2.7,30,3,30h26c0.3,0,0.7-0.2,0.9-0.5  S30,28.9,29.9,28.6z" />
              </svg>
            </div>
          </li>
        </ul>
        <div className="create-post__block--textarea">
          <TextareaAutosize
            placeholder="Text (optional)"
            //value={}
            maxLength={2000}
            //disabled
          />
        </div>
        <div className="create-post__block--buttons">
          <button
            type="button"
            className="create-post__block--buttons-cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button type="submit" className="create-post__block--buttons-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostBlock;

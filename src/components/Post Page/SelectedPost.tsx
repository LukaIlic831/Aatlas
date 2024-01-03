import * as React from "react";
import Post from "../Post/Post";
import Comment from "./Post Page Components/Comment";
import { useParams } from "react-router";
import ReactTextareaAutosize from "react-textarea-autosize";
import useFetchWithFilter from "../../hooks/useFetchWithFilter";
import { IPost } from "../../ts/interfaces/post_interfaces";

interface ISelectedPostProps {}

const SelectedPost: React.FunctionComponent<ISelectedPostProps> = (props) => {
  const { id } = useParams();
  const post = useFetchWithFilter<IPost[]>("post", "*", "id", id!);
  return (
    <div className="post__wrapper">
      <form>
        <div className="post__block cursor-block">
          <div className="post__back">
            <div className="post__back--icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                ></path>
              </svg>
            </div>
          </div>
          {post.data && <Post post={post.data[0]} />}
          <div className="post__comment">
            <ReactTextareaAutosize
              placeholder="What do you have in mind?"
              maxLength={1200}
            />
          </div>
          <div className="post__button">
            <button>Comment</button>
          </div>
        </div>
      </form>
      <div className="after-loader__block">
        <p>No comments</p>
      </div>
    </div>
  );
};

export default SelectedPost;

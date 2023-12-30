import * as React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import CreatePostBlock from "../components/Create Post/CreatePostBlock";

interface ICreatePostProps {}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {
  return (
    <div className="main__wrapper">
      <Nav />
      <CreatePostBlock />
      <Footer />
    </div>
  );
};

export default CreatePost;

import * as React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import SelectedPost from "../components/Post Page/SelectedPost";

interface IPostPageProps {}

const PostPage: React.FunctionComponent<IPostPageProps> = (props) => {
  return (
    <div className="main__wrapper">
      <Nav />
      <SelectedPost/>
      <Footer />
    </div>
  );
};

export default PostPage;

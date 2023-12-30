import * as React from "react";
import Nav from "../components/Nav/Nav";
import Categories from "../components/Home/Categories";
import Footer from "../components/Footer/Footer";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <div className="main__wrapper">
      <Nav />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;

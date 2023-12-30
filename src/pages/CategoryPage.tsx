import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import CategoryBlock from "../components/Category Page/CategoryBlock";

interface ICategoryPageProps {}

const CategoryPage: React.FunctionComponent<ICategoryPageProps> = (props) => {
  return (
    <div className="main__wrapper">
      <Nav />
      <CategoryBlock />
      <Footer />
    </div>
  );
};

export default CategoryPage;

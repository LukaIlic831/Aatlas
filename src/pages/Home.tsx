import * as React from "react";
import Nav from "../components/Nav/Nav";
import Categories from "../components/Home/Categories";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      session && !session.user.user_metadata.username && navigate("/add-username");
    });
  }, []);
  return (
    <div className="main__wrapper">
      <Nav />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;

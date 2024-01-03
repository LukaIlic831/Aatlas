import * as React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ProfileBlock from "../components/Profile/ProfileBlock";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <div className="main__wrapper">
      <Nav />
      <ProfileBlock />
      <Footer />
    </div>
  );
};

export default Profile;

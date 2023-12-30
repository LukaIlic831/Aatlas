import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import ProfileBlock from "../components/Profile/ProfileBlock";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <div className="main__wrapper">
      <Nav />
      <ProfileBlock months={months} />
      <Footer />
    </div>
  );
};

export default Profile;

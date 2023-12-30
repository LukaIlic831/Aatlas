import * as React from "react";
import { useLocation, useParams } from "react-router";
import Post from "../Post";
import ProfileSkeleton from "../Skeleton Loaders/ProfileSkeleton";

interface IProfileBlockProps {
  months: string[];
}

const ProfileBlock: React.FunctionComponent<IProfileBlockProps> = (props) => {
  return (
    <div className="profile__wrapper">
      <div className="profile__block">
        <span className="profile__block--name">@Username</span>
        <span className="profile__block--date">{`Joined on ${5} ${12}, ${2022}`}</span>
      </div>
    </div>
  );
};

export default ProfileBlock;

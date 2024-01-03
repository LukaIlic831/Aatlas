import * as React from "react";
import { useLocation, useParams } from "react-router";
import Post from "../Post/Post";
import ProfileSkeleton from "../Skeleton Loaders/ProfileSkeleton";
import useFetchWithFilter from "../../hooks/useFetchWithFilter";
import { IUserProfile } from "../../ts/interfaces/profile_interfaces";
import useDate from "../../hooks/useDate";

interface IProfileBlockProps {}

const ProfileBlock: React.FunctionComponent<IProfileBlockProps> = (props) => {
  const { id } = useParams();
  const thisUser = useFetchWithFilter<IUserProfile[]>("user", "*", "id", id!);
  const dateCreated = useDate(
    thisUser.data ? thisUser.data[0].date_created : null
  );
  return (
    <div className="profile__wrapper">
      <div className="profile__block">
        {thisUser.data ? (
          <>
            <span className="profile__block--name">
              @{thisUser.data[0].username}
            </span>
            <span className="profile__block--date">{dateCreated}</span>
          </>
        ) : (
          <p>Sorry, profile not found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBlock;

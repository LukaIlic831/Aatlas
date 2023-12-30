import * as React from "react";

interface IProfileSkeletonProps {}

const ProfileSkeleton: React.FunctionComponent<IProfileSkeletonProps> = (
  props
) => {
  return (
    <>
      <div className="profile__name--skeleton"></div>
      <div className="profile__date--skeleton"></div>
    </>
  );
};

export default ProfileSkeleton;

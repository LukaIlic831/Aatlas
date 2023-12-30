import * as React from "react";

interface INavUsernameSkeletonProps {}

const NavUsernameSkeleton: React.FunctionComponent<
  INavUsernameSkeletonProps
> = (props) => {
  return <div className="username-skeleton"></div>;
};

export default NavUsernameSkeleton;

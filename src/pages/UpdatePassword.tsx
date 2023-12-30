import * as React from "react";
import UpdatePasswordBlock from "../components/Update Password/UpdatePasswordBlock";

interface IUpdatePasswordProps {}

const UpdatePassword: React.FunctionComponent<IUpdatePasswordProps> = (
  props
) => {
  return (
    <div className="password-reset__wrapper">
      <UpdatePasswordBlock />
    </div>
  );
};

export default UpdatePassword;

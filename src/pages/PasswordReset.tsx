import * as React from "react";
import PasswordResetBlock from "../components/Password Reset/PasswordResetBlock";

interface IPasswordResetProps {}

const PasswordReset: React.FunctionComponent<IPasswordResetProps> = (props) => {
  return (
    <div className="password-reset__wrapper">
      <PasswordResetBlock />
    </div>
  );
};

export default PasswordReset;

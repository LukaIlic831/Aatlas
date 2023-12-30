import * as React from "react";
import ButtonLoader from "../ButtonLoader";

interface IPasswordResetBlockProps {}

const PasswordResetBlock: React.FunctionComponent<IPasswordResetBlockProps> = (
  props
) => {
  return (
    <div className="password-reset__block">
      <div className="password-reset__block--para">
        <div className="password-reset__block--para-title">
          <h1>Reset Password</h1>
        </div>
        <form className="password-reset__block--para-form">
          <div className="password-reset__block--para-form-input">
            <input type="email" placeholder="Enter Email Address" required />
          </div>
          <div className="password-reset__block--para-form-button">
            <button>Send Reset Link</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetBlock;

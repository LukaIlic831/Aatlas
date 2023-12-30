import * as React from "react";

interface ISignInErrorProps {}

const SignInError: React.FunctionComponent<ISignInErrorProps> = (props) => {
  return (
    <div className="auth-block__para--error">
      <p>Wrong password or email</p>
    </div>
  );
};

export default SignInError;

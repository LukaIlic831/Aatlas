import * as React from "react";

interface ISignUpErrorProps {}

const SignUpError: React.FunctionComponent<ISignUpErrorProps> = (props) => {
  return (
    <div className="auth-block__para--error">
      <p>Sign Up Erorr</p>
    </div>
  );
};

export default SignUpError;

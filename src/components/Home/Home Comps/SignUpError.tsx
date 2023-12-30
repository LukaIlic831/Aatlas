import * as React from "react";

interface ISignUpErrorProps {
  signUpError: string;
}

const SignUpError: React.FunctionComponent<ISignUpErrorProps> = (props) => {
  return (
    <div className="auth-block__para--error">
      <p>{props.signUpError}</p>
    </div>
  );
};

export default SignUpError;

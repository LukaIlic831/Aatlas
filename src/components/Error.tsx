import * as React from "react";

interface IErrorProps {}

const Error: React.FunctionComponent<IErrorProps> = (props) => {
  return (
    <div className="error">
      <div className="error__number">
        <h1>404</h1>
      </div>
      <div className="error__text">
        <p>This page could not be found.</p>
      </div>
    </div>
  );
};

export default Error;

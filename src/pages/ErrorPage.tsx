import * as React from "react";
import Error from "../components/Error";

interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = (props) => {
  return (
    <div className="error__wrapper">
      <Error />
    </div>
  );
};

export default ErrorPage;

import * as React from "react";

interface ILoaderProps {}

const Loader: React.FunctionComponent<ILoaderProps> = (props) => {
  return (
    <div className="loader__wrapper">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

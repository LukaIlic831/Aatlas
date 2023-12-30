import * as React from "react";
import AddUsernameBlock from "../components/Add Username/AddUsernameBlock";

interface IAddUsernameProps {}

const AddUsername: React.FunctionComponent<IAddUsernameProps> = (props) => {
  return (
    <div className="add-username__wrapper">
      <AddUsernameBlock />
    </div>
  );
};

export default AddUsername;

import * as React from "react";
import { useNavigate } from "react-router-dom";

interface IAddUsernameBlockProps {}

const AddUsernameBlock: React.FunctionComponent<IAddUsernameBlockProps> = (
  props
) => {
  return (
    <div className="add-username__block">
      <div className="add-username__block--para">
        <div className="add-username__block--para-title">
          <h1>Add Username</h1>
        </div>
        <form className="add-username__block--para-form">
          <div className="add-username__block--para-form-input">
            <input type="text" placeholder="Enter Username" required />
          </div>
          <div className="add-username__block--para-form-button">
            <button>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsernameBlock;

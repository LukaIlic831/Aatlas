import * as React from "react";
import useAppContext from "../../hooks/useAppContext";
import addUsername from "../../features/addUsername/addUsername";
import { EnumStatus } from "../../ts/enums/add_username_status";
import { useNavigate } from "react-router-dom";
import useFetchSupabase from "../../hooks/useFetchSupabase";
import { IUserProfile } from "../../ts/interfaces/profile_interfaces";

interface IAddUsernameBlockProps {}

const AddUsernameBlock: React.FunctionComponent<IAddUsernameBlockProps> = (
  props
) => {
  const { currentUser } = useAppContext();
  const navigate = useNavigate();
  const users = useFetchSupabase<IUserProfile[]>("user", "*");
  const [status, setStatus] = React.useState<EnumStatus>(EnumStatus.Default);
  const [statusClass, setStatusClass] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  return (
    <div className="add-username__block">
      <div className="add-username__block--para">
        <div className="add-username__block--para-title">
          <h1>Add Username</h1>
        </div>
        {status != "" && (
          <div
            className={
              statusClass
                ? "add-username__block--para-successful"
                : "add-username__block--para-error"
            }
          >
            <p>{status}</p>
          </div>
        )}
        <form
          className="add-username__block--para-form"
          onSubmit={(e) =>
            addUsername(
              e,
              setStatus,
              setStatusClass,
              username,
              currentUser?.user.id!,
              navigate,
              users.data!
            )
          }
        >
          <div className="add-username__block--para-form-input">
            <input
              type="text"
              placeholder="Enter Username"
              required
              onChange={(event) => setUsername(event.target.value)}
            />
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

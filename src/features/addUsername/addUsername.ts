import { NavigateFunction } from "react-router-dom";
import { IUserProfile } from "../../ts/interfaces/profile_interfaces";
import supabase from "../../supabase";
import { EnumStatus } from "../../ts/enums/add_username_status";

const addUsername = async (
  event: React.FormEvent<HTMLFormElement>,
  setStatus: React.Dispatch<React.SetStateAction<EnumStatus>>,
  setStatusClass: React.Dispatch<React.SetStateAction<boolean>>,
  username: string,
  id: string,
  navigate: NavigateFunction,
  users: IUserProfile[]
) => {
  event.preventDefault();
  let result = usernameExsist(username, users);
  if (!result) {
    updateUser(username);
    updateUsernameInDatabase(username, id);
    setStatus(EnumStatus.Success);
    setStatusClass(true);
    setTimeout(() => {
      navigate("/");
    }, 300);
  } else {
    setStatus(EnumStatus.Error);
  }
};

const usernameExsist = (username: string, users: IUserProfile[]) => {
  return !!users?.find((user) => user.username === username);
};

const updateUser = async (username: string) => {
  const { error } = await supabase.auth.updateUser({
    data: { username: username },
  });
  error && alert(error.message);
};

const updateUsernameInDatabase = async (username: string, id: string) => {
  const { error } = await supabase
    .from("user")
    .update({
      username: username,
    })
    .eq("id", id);
  error && alert(error.message);
};

export default addUsername;

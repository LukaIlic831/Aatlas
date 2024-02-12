import { Location, NavigateFunction } from "react-router-dom";
import supabase from "../../supabase";

const signOut = async (navigate: NavigateFunction) => {
  const { error } = await supabase.auth.signOut();
  error && alert(error.message);
  navigate("/");
};

export default signOut;

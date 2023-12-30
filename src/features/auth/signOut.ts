import { Location, NavigateFunction } from "react-router-dom";
import supabase from "../../supabase";

const signOut = async (navigate: NavigateFunction, location: Location<any>) => {
  const { error } = await supabase.auth.signOut();
  error && alert(error.message);
  location.pathname.includes("/profile") && navigate("/");
};

export default signOut;

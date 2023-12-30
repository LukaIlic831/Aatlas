import supabase from "../../supabase";

const openSignUp = (
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSignInVisible(false);
  setSignUpVisible(true);
};

const handleSignin = async (
  event: React.FormEvent<HTMLFormElement>,
  setInvalidCredentials: React.Dispatch<React.SetStateAction<boolean>>,
  email: string,
  password: string,
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  setInvalidCredentials(false);
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  error?.message === "Invalid login credentials"
    ? setInvalidCredentials(true)
    : setTimeout(() => {
        setSignInVisible(false);
      }, 300);
};

const googleSignIn = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });
  error && alert(error.message);
};

const signInFeatures = {
  openSignUp,
  handleSignin,
  googleSignIn,
};

export default signInFeatures;

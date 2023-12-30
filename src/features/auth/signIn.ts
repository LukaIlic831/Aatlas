import supabase from "../../supabase";

const openSignUp = (
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSignInVisible(false);
  setSignUpVisible(true);
};

const togglePassword = (
  passwordType: string,
  setPasswordType: React.Dispatch<React.SetStateAction<string>>
) => {
  if (passwordType === "password") {
    setPasswordType("text");
    return;
  }
  setPasswordType("password");
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

const signInFeatures = {
  openSignUp,
  togglePassword,
  handleSignin,
};

export default signInFeatures;

import supabase from "../../supabase";
import { checkEmailDomain } from "../../utils/checkEmailDomain";

const openSignIn = (
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSignInVisible(true);
  setSignUpVisible(false);
};

const handleSignUp = async (
  event: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  username: string,
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSignUpError: React.Dispatch<React.SetStateAction<string | boolean>>
): Promise<void> => {
  event.preventDefault();

  if (checkEmailDomain(email)) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
          provider: "email",
        },
      },
    });
    if (error) {
      error.message ===
      'duplicate key value violates unique constraint "user_username_key"'
        ? setSignUpError("This username already exists")
        : setSignUpError(error.message);
    } else {
      setTimeout(() => {
        setSignUpVisible(false);
      }, 300);
    }
  } else {
    setSignUpError(
      "Allowed email domains are: gmail.com, yahoo.com and hotmail.com"
    );
  }
};

const signUpFeatures = {
  openSignIn,
  handleSignUp,
};

export default signUpFeatures;

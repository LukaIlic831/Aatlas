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

const signInFeatures = {
    openSignUp,
    togglePassword
  };

export default signInFeatures;

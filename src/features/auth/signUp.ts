const openSignIn = (
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSignInVisible(true);
  setSignUpVisible(false);
};

const signUpFeatures = {
  openSignIn,
};

export default signUpFeatures;

export const togglePassword = (
  passwordType: string,
  setPasswordType: React.Dispatch<React.SetStateAction<string>>
) => {
  if (passwordType === "password") {
    setPasswordType("text");
    return;
  }
  setPasswordType("password");
};

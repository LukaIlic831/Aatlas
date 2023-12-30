export const checkEmailDomain = (email: string) => {
  let emailDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
  let emailDomain = email.slice(email.indexOf("@") + 1);
  return emailDomains.includes(emailDomain);
};

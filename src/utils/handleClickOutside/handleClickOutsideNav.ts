export const handleClickOutsideNav = (
  event: Event,
  blockRef: React.MutableRefObject<HTMLDivElement | null>,
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>,
  mobileMenuRef: React.MutableRefObject<HTMLDivElement | null>,
  setMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>>,
  profileBlockRef: React.MutableRefObject<HTMLUListElement | null>,
  setProfileBlockVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!blockRef.current?.contains(event.target as Node)) {
    setSignUpVisible(false);
    setSignInVisible(false);
    document.body.style.overflowY = "auto";
  }
  if (!mobileMenuRef.current?.contains(event.target as Node)) {
    setMobileMenuVisible(false);
  }
  if (!profileBlockRef.current?.contains(event.target as Node)) {
    setProfileBlockVisible(false);
  }
};

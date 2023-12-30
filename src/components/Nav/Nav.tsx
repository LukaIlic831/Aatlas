import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import NavUsernameSkeleton from "../Skeleton Loaders/NavUsernameSkeleton";
import SignUp from "../Home/SignUp";
import SignIn from "../Home/SignIn";
import MobileNav from "../Mobile/MobileNav";
import MobileMenu from "../Mobile/MobileMenu";
import { toggleDarkLightMode } from "../../utils/darkLightMode";
import useAppContext from "../../hooks/useAppContext";

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  const { currentUser } = useAppContext();
  const location = useLocation();
  const [signUpVisible, setSignUpVisible] = React.useState<boolean>(false);
  const [signInVisible, setSignInVisible] = React.useState<boolean>(false);
  const blockRef = React.useRef<HTMLDivElement | null>(null);
  const [mobileMenuVisible, setMobileMenuVisible] =
    React.useState<boolean>(false);
  const mobileMenuRef = React.useRef<HTMLDivElement | null>(null);
  const [lightMode, setLightMode] = React.useState<string>(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")!
      : "light-theme"
  );

  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!blockRef.current?.contains(event.target as Node)) {
        setSignUpVisible(false);
        setSignInVisible(false);
        document.body.style.overflowY = "auto";
      }
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setMobileMenuVisible(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [blockRef, mobileMenuRef]);
  return (
    <>
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__list--item">
            <Link to="/">
              <div className="nav__list--item-link">
                <div
                  className={
                    location.pathname.length === 1
                      ? "nav__list--item-link-icon marker"
                      : "nav__list--item-link-icon"
                  }
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"></path>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"></path>
                  </svg>
                </div>
                <p className={location.pathname.length === 1 ? "marker" : ""}>
                  Home
                </p>
              </div>
            </Link>
          </li>
          <li
            className="nav__list--item"
            onClick={() => toggleDarkLightMode(lightMode, setLightMode)}
          >
            <div className="nav__list--item-link">
              <div className="nav__list--item-link-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                </svg>
              </div>
              <p>Dark Mode</p>
            </div>
          </li>
        </ul>
        {currentUser ? (
          <div className="nav__profile">
            {currentUser.user.user_metadata.username ? (
              <button>{currentUser?.user.user_metadata.username}</button>
            ) : (
              <NavUsernameSkeleton />
            )}
          </div>
        ) : (
          <div className="nav__button">
            <button onClick={() => setSignUpVisible(true)}>Join Aatlas</button>
          </div>
        )}
      </div>
      {signUpVisible && (
        <SignUp
          setSignUpVisible={setSignUpVisible}
          setSignInVisible={setSignInVisible}
          blockRef={blockRef}
        />
      )}
      {signInVisible && (
        <SignIn
          setSignUpVisible={setSignUpVisible}
          setSignInVisible={setSignInVisible}
          blockRef={blockRef}
        />
      )}
      <MobileNav
        setMobileMenuVisible={setMobileMenuVisible}
        setSignUpVisible={setSignUpVisible}
      />
      {mobileMenuVisible && (
        <MobileMenu
          mobileMenuRef={mobileMenuRef}
          toggleDarkLightMode={toggleDarkLightMode}
          lightMode={lightMode}
          setLightMode={setLightMode}
        />
      )}
    </>
  );
};

export default Nav;

import * as React from "react";
import { Link } from "react-router-dom";

interface IMobileMenuProps {
  mobileMenuRef: React.MutableRefObject<HTMLDivElement | null>;
  toggleDarkLightMode: (
    lightMode: string,
    setLightMode: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  lightMode: string;
  setLightMode: React.Dispatch<React.SetStateAction<string>>;
}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = (props) => {
  return (
    <div className="mobile__background">
      <div className="mobile__menu" ref={props.mobileMenuRef}>
        <ul className="mobile__menu--list">
          <li>
            <Link to="/">
              <div className="mobile__menu--list-link">
                <div className="mobile__menu--list-link-icon">
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
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li
            className="nav__list--item"
            onClick={() =>
              props.toggleDarkLightMode(props.lightMode, props.setLightMode)
            }
          >
            <div className="mobile__menu--list-link">
              <div className="mobile__menu--list-link-icon">
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
      </div>
    </div>
  );
};

export default MobileMenu;

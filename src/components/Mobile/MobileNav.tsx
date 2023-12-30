import * as React from "react";

interface IMobileNavProps {
  setMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FunctionComponent<IMobileNavProps> = (props) => {
  return (
    <div className="mobile-nav">
      <div
        className="mobile-nav__menu"
        onClick={() => props.setMobileMenuVisible(true)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.6em"
          width="1.6em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          ></path>
        </svg>
      </div>
      <div className="mobile-nav__button">
        <button onClick={() => props.setSignUpVisible(true)}>
          Join Aatlas
        </button>
      </div>
    </div>
  );
};

export default MobileNav;

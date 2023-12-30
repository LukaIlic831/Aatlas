import * as React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../ButtonLoader";

interface IUpdatePasswordBlockProps {}

const UpdatePasswordBlock: React.FunctionComponent<
  IUpdatePasswordBlockProps
> = (props) => {
  return (
    <div className="password-reset__block">
      <div className="password-reset__block--para">
        <div className="password-reset__block--para-title">
          <h1>Reset Password</h1>
        </div>
        <form className="password-reset__block--para-form">
          <div className="password-reset__block--para-form-input">
            <input type="password" placeholder="Enter New Password" required />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="show-password"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 2L22 22"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="password-reset__block--para-form-button">
            <button>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordBlock;

import * as React from "react";
import { Link } from "react-router-dom";
import ButtonLoader from "../ButtonLoader";
import signInFeatures from "../../features/auth/signIn";

interface ISignInProps {
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>;
  blockRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordType, setPasswordType] = React.useState<string>("password");
  return (
    <div className="auth__wrapper">
      <div className="auth-block" ref={props.blockRef}>
        <div className="auth-block__para">
          <div className="auth-block__para--title">
            <h1>Log in to your account</h1>
          </div>
          <form className="auth-block__para--form">
            <div className="auth-block__para--form-block">
              <p>Email Address</p>
              <input
                type="email"
                placeholder="Enter Email Address"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="auth-block__para--form-block">
              <p>Password</p>
              <input
                type={passwordType}
                placeholder="Enter Password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="show-password"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() =>
                  signInFeatures.togglePassword(passwordType, setPasswordType)
                }
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
            <div className="auth-block__para--form-forgot">
              <Link to="/reset-password" state={{ index: 123 }}>
                Forgot Password?
              </Link>
            </div>
            <div className="auth-block__para--form-google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <p>Sign in with Google</p>
            </div>
            <div className="auth-block__para--form-button">
              <button type="submit">Sign In</button>
            </div>
            <div className="auth-block__para--form-para">
              <p>
                Don't have an account yet?{" "}
                <span
                  onClick={() =>
                    signInFeatures.openSignUp(
                      props.setSignInVisible,
                      props.setSignUpVisible
                    )
                  }
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

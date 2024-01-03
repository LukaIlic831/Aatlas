import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FooterMobileButton from "./Footer Comps/FooterMobileButton";
import useAppContext from "../../hooks/useAppContext";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const { currentUser } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="footer">
        <div className="footer__block">
          <div className="footer__block--para">
            <p>All Rights Reserved. Copyright &copy; 2024</p>
          </div>
          {location.pathname != "/create-post" && currentUser?.user.id && (
            <button
              className="footer__block--button"
              onClick={() => navigate("/create-post")}
            >
              Create Post
            </button>
          )}
        </div>
      </div>
      {location.pathname != "/create-post" && (
        <FooterMobileButton navigate={navigate} />
      )}
    </>
  );
};

export default Footer;

import * as React from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router";

interface ICommentProps {}

const Comment: React.FunctionComponent<ICommentProps> = (props) => {
  return (
    <div className="comment">
      <div className="comment__align">
        <div className="comment__line">
          <div className="comment__line--border"></div>
        </div>
        <div className="comment__wrapper">
          <div className="comment__info">
            <div className="comment__info--desc">
              <div className="comment__info--desc-username">
                <p>Username</p>
              </div>
              <div className="comment__info--desc-date">
                <span>Moment from now</span>
              </div>
            </div>
            <div className="comment__info--text">
              <p>Comment Desc</p>
            </div>
            <ul className="comment__info--items items">
              <li className="comment__info--items-item items__item">
                <div className="comment__info--items-item-icon items__item--icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                  </svg>
                </div>
                <div className="comment__info--items-item-count items__item--count">
                  <span>Number of Likes</span>
                </div>
              </li>
              <li className="comment__info--items-item items__item">
                <div className="comment__info--items-item-icon items__item--icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                  </svg>
                </div>
                <div className="comment__info--items-item-count items__item--count">
                  <span>Number of Comments</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

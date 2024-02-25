import * as React from "react";
import { ReactComponent as EditSvg } from "../../../../../assets/edit.svg";

interface ICommentEditProps {
  setAction: React.Dispatch<React.SetStateAction<string>>;
  setOpenCommentTextarea: React.Dispatch<React.SetStateAction<boolean>>;
  action: string;
}

const CommentEdit: React.FunctionComponent<ICommentEditProps> = (props) => {
  const handleEditClick = () => {
    props.action === "edit"
      ? props.setOpenCommentTextarea((prev) => !prev)
      : props.setOpenCommentTextarea(true);
    props.setAction("edit");
  };
  return (
    <li
      className="edit__info--items-item items__item"
      onClick={handleEditClick}
    >
      <div className="edit__info--items-item-icon items__item--icon">
        <EditSvg />
      </div>
    </li>
  );
};

export default CommentEdit;

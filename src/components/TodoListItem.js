import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle, style, theme }) => {
  const { id, text, checked } = todo;
  const colorList = {
    default: ["white"],
    baduk: ["white", "black"],
    pastel: ["#FFF9BE", "#FAD6DD", "#D0C6E9"],
    rainbow: ["#e8dff5", "#fce1e4", "#fcf4dd", "#ddedea", "#daeaf6"],
  };
  const colorListLength = {
    default: 1,
    baduk: 2,
    pastel: 3,
    rainbow: 5,
  };
  const Theme = theme.toString();
  const Num = colorListLength[Theme];
  style = {
    ...style,
    "background-color": colorList[Theme][id % Num],
  };

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);

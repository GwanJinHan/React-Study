import React from "react";
import "./TodoFooter.scss";

const TodoFooter = ({ onClick }) => {
  const onClickBtn = (e) => {
    onClick(e.target.name);
  };
  return (
    <div className="TodoFooter">
      <button onClick={onClickBtn} name="default">
        기본
      </button>
      <button onClick={onClickBtn} name="rainbow">
        무지개
      </button>
      <button onClick={onClickBtn} name="baduk">
        바둑판
      </button>
      <button onClick={onClickBtn} name="pastel">
        파스텔
      </button>
    </div>
  );
};

export default TodoFooter;

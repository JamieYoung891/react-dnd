import React from "react";

export const Card = (props) => {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    e.target.style.display = "block";
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

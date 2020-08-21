import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.opacity = "0.1";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <StyledCard
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-block;

  width: 5em;
  height: 5em;
  padding: 0.5em 1em;

  background-color: gray;
`;

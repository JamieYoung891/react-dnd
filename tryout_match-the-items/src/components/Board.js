import React from "react";
import styled from "styled-components";

export const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);

    if (card_id !== props.card_id) alert("it does not match");
    else e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <StyledBoard id={props.id} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </StyledBoard>
  );
};

const StyledBoard = styled.section`
  display: inline-block;

  width: 6em;
  height: 6em;

  margin-right: 1em;
  padding: 0.5em;

  color: white;

  background-color: black;

  :last-of-type {
    margin-right: 0;
  }
`;

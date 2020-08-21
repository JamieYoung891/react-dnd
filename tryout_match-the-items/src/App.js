import React from "react";
import styled from "styled-components";
import { data } from "./data";
import { GlobalStyle } from "./GlobalStyle";
import { Board } from "./components/Board";
import { Card } from "./components/Card";

function App() {
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <StyledSection>
        <Board id='board-1' card_id='card-1'>
          <Card id='card-1' draggable='true'>
            card-1
          </Card>
        </Board>
        <Board id='board-2' card_id='card-2'>
          <Card id='card-2' draggable='true'>
            card-2
          </Card>
        </Board>
        <Board id='board-3' card_id='card-3'>
          <Card id='card-3' draggable='true'>
            card-3
          </Card>
        </Board>
        <Board id='board-4' card_id='card-4'>
          <Card id='card-4' draggable='true'>
            card-4
          </Card>
        </Board>
      </StyledSection>
      <StyledSection>
        <Board id='board-6' card_id='card-1'>
          card-1
        </Board>
        <Board id='board-7' card_id='card-2'>
          card-2
        </Board>
        <Board id='board-8' card_id='card-3'>
          card-3
        </Board>
        <Board id='board-9' card_id='card-4'>
          card-4
        </Board>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;

  width: 80%;
  max-width: 1620px;

  margin: 1rem auto;
  padding: 3rem;

  background-color: ivory;

  :first-of-type {
    margin-top: 3rem;
  }
`;

export default App;

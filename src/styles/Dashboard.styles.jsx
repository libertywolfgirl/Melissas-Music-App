import styled from "styled-components";

export const DashBoardContainer = styled.div`
  padding: 4rem;
  min-height: 100vh;
  width: 100%;
  @media (max-width: 54em) {
    padding: 2rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;

  &::placeholder {
    font-size: 2rem;
  }
`;

export const ResultsContainer = styled.div`
  flex-grow: 1;
  margin: 3rem 0;
  overflow-y: auto;
  overflow-x: auto;
`;

export const LyricsContainer = styled.div`
  height: 65vh;
  text-align: center;
  color: #fff;
  white-space: pre;
  font-size: 3rem;
  @media (max-width: 54em) {
    font-size: 2.5rem;
  }
  @media (max-width: 39em) {
    font-size: 2rem;
  }
  @media (max-width: 27em) {
    font-size: 1.5rem;
  }
`;

export const PlayerContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.5rem;
`;

import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4rem;
  @media (max-width: 54em) {
    margin-bottom: 3rem;
  }
`;

export const HeadingContainer = styled.h1`
  font-size: 10rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 4rem;
  @media (max-width: 81em) {
    font-size: 9rem;
  }
  @media (max-width: 65em) {
    font-size: 8rem;
  }
  @media (max-width: 54em) {
    font-size: 7rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 39em) {
    font-size: 6rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 27em) {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.img`
  max-height: 70vh;
  max-width: 90vw;
  margin-bottom: 2rem;
  @media (max-width: 54em) {
    margin-bottom: 1rem;
  }
  @media (max-width: 27em) {
    margin-bottom: 0;
  }
`;

export const DescriptionContainer = styled.p`
  font-size: 4rem;
  max-width: 60vw;
  @media (max-width: 103em) {
    font-size: 3.5rem;
    max-width: 70vw;
  }
  @media (max-width: 81em) {
    max-width: 75vw;
  }
  @media (max-width: 65em) {
    max-width: 80vw;
  }
  @media (max-width: 54em) {
    font-size: 3rem;
    max-width: 85vw;
  }
  @media (max-width: 39em) {
    max-width: 90vw;
  }
  @media (max-width: 27em) {
    font-size: 2.5rem;
  }
`;

import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  cursor: pointer;
`;

export const ResultImage = styled.img`
  height: 64px;
  width: 64px;
`;

export const SongContainer = styled.div`
  margin-left: 3rem;
`;

export const TitleText = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
  color: #592c0d;
  @media (max-width: 39em) {
    font-size: 2rem;
  }
`;

export const ArtistText = styled.p`
  color: #f5f5f5;
  font-size: 2rem;
  font-weight: 500;
  color: #592c0d;
  @media (max-width: 39em) {
    font-size: 1.5rem;
  }
`;

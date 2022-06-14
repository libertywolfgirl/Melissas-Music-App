import styled from "styled-components";

export const FooterContainer = styled.div`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem;
  @media (max-width: 54em) {
    font-size: 1.8rem;
    margin-bottom: 8rem;
  }
  @media (max-width: 39em) {
    margin-top: 2rem;
  }
`;

export const LinkContainer = styled.a`
  color: #ffffff;
  margin-left: 0.5rem;
`;

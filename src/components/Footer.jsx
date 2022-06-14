import React from "react";
import {
  FooterContainer,
  LinkContainer
} from "../styles/Footer.styles";

const Footer = () => (
  <FooterContainer>
    <p>
      Check out more friends
      <LinkContainer href="https://rhetorical-radical-animals.glitch.me/" target="_blank">
        here
      </LinkContainer>
      !
    </p>
    <LinkContainer href="https://www.flaticon.com/free-icons/bat" title="bat icons">Bat icons created by Freepik - Flaticon</LinkContainer>
  </FooterContainer>
);

export default Footer;

import React from "react";
import {
  HeaderContainer,
  HeadingContainer,
  ImageContainer,
  DescriptionContainer
} from "../styles/Header.styles";

const Header = () => (
  <HeaderContainer>
    <HeadingContainer>Melissa's Music Player</HeadingContainer>
    <ImageContainer
      className="bat-img"
      src="https://images.unsplash.com/photo-1502490671759-21b5c49c732f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
      alt="bat"
    />
    <DescriptionContainer>
      Hi there! I'm Melissa, and I'm a bat from Massachusetts! You're not afraid of me, are you? Bats eat lots of pesky insects humans don't like. We also have poor eyesight but keen hearing. Let's listen to some music together!
    </DescriptionContainer>
  </HeaderContainer>
);

export default Header;

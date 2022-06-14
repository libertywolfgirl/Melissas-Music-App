import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
@media (max-width: 81em) {
  html {
    font-size: 56.25%;
  }
}
@media (max-width: 65em) {
  html {
    font-size: 50%;
  }
}
`;

export default GlobalStyles;

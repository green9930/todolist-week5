import { createGlobalStyle } from 'styled-components';
import { colors } from 'theme/theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  body {
    background-color: ${colors.white};
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 32px;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    :focus {
      outline: none;
      border-color: ${colors.orange}
    }
    :hover {
      border-color: ${colors.orange}
    }
  }
`;

export default GlobalStyle;

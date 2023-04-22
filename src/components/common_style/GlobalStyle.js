import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  * {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
p {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
html {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

  
 `;

/* 
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  html {
    scroll-behavior: smooth;
  }
  
  html,
  body {
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 500;
    line-height: 1.16;
  } */
  /* ------------------------container------------------------ */
  /* .container {
    margin: 0 auto;
    padding: 0 20px;
  
    
    @media screen and (min-width: 320px) {
      width: 320px;
    }
  
    @media screen and (min-width: 768px) {
      width: 768px;
      padding: 0 32px;
    }
  
    @media screen and (min-width: 1280px) {
      width: 1200px;
    }
  } */
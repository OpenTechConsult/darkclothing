import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media screen and (max-width: 800px){
      padding: 10px;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}

.App {
    display: flex;
    justify-content: center;
    padding: 40px;
  }
  
  .container {
    width: 45%;
    margin: 0 10px;
    min-height: 200px;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    padding: 20px;
  
    &.user-list {
      background-color: lightseagreen;
    }
  
    h1 {
      font-size: 24px;
    }
  
    h2 {
      font-size: 18px;
    }
  
    .post {
      background-color: white;
      margin: 10px 0;
      width: 95%;
      padding: 15px;
      border-radius: 25px;
  
      h3 {
        color: #fcbd77;
      }
  
      p {
        font-style: italic;
      }
    }
  }
`

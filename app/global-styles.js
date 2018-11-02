import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .small-input {
    float: left;
    width: 200px;
    margin: 5px;
    height: 35px;
    color: gray;
    borderColor: #eee;
  }

  .margin-0 {
    margin: 0px !important;
  }

  .padding-0 {
    padding: 0px !important;
  }

  .card.card-body {
    border-bottom: 3px solid lightgray;
    border-top: none;
    border-right: none;
    border-radius: 0px;
    border-left: none;
  }
`;

export default GlobalStyle;

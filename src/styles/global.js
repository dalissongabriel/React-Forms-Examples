import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFFFFF;
        --titulos: #ff5454;
        --textos: #1a2e35;
        --shape-background: #f7f8f9;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button, input[type=submit], input[type=reset] {
        cursor: pointer;
        border: none;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .error-message {
      font-size: 1.1rem;
      color: red;
      font-style: italic;
    }
`

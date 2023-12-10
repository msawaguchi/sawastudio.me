import { createGlobalStyle, css } from 'styled-components'

import neon80 from '../assets/fonts/Neon.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Neon';
        src: url(${neon80}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Lekton', sans-serif;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: #0F263E;
      overflow-x: hidden;
     
    }

    .h1-title {
        font-family: 'Neon';
        font-size: 4rem;
        -webkit-text-stroke: 2px #56f5ff;
        text-shadow: 0px 0px 8px #90f6fd;
        align-self: flex-start;
        text-transform: uppercase;
    }

    h2, h3 {
        font-weight: bold;
    }

    h3 {
        color: #F453AC;
 
        margin-bottom: 1rem;
        text-shadow:
        0px 0px 10px rgba(255, 33, 153, 0.75),
        0px 0px 6px #383838;
        font-size: 1.75rem;
    }

    h4 {
        color: #56f5ff;
        text-shadow: 0px 0px 2px #90f6fd;
        font-size: 1.12rem;

    }

    p {
        color: #c5c4d1;
        font-weight: bold;
        line-height: 1.5rem;
    }

    button, a {
        font-weight: bold;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .error {
        color: #ff0d0d;
        margin-top: -2%;
        font-weight: bold;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background: #0f263e;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: 0px 0px 5px #ff14e8;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        background: #FF56B1;
    }

    ::-webkit-scrollbar {
       width: 10px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border-radius: 25px !important;
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px #061627 inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    .show-menu {
        position: fixed;
        display: flex;
        z-index: 2;
    }

    .none {
        display: none;
    }

  /*
    ${(props) =>
      props.isExpanded &&
      css`
        background: rgba(2, 28, 38, 0.75);
        transition: background 0.3s;
      `}
  } */

    .hero-mask {
        height: 100%;
        width: 100%;
        background: rgba(2, 28, 38, 0.7);

        display: flex;
        align-items: center;
        padding: 2rem;
    }

    .flags-container {
        display: flex;
        flex-direction: column;
        width: 4.5rem;
        position: fixed;
        padding: 1rem;
        bottom: 0%;
        gap: 3px;

        .selected {
            filter: grayscale(0.2);
        }

        img {
            width: 100%;
            height: max-content;
            filter: grayscale(1);

            &:hover {
                cursor: pointer;
                box-shadow:
                0px 0px 10px rgba(86, 245, 255, 0.5),
                inset 0px 0px 10px rgba(86, 245, 255, 0.5);
            }
        }
    }
`

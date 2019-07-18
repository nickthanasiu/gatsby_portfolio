import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ScreenSizeProvider } from '~context/screenSizeContext';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        /* Google Fonts import */
        @import url('https://fonts.googleapis.com/css?family=Cabin|Roboto+Condensed:400,700&display=swap');
        
        font-size: 16px;
        margin: 0;
        max-height: 100vh;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 700;
    }

    p, span, footer {
        font-family: 'Cabin', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;

        &:active,
        &:hover {
            outline-width: 0;
        }
      }
`

export const wrapRootElement = ({ element }) => (
    <ScreenSizeProvider>
        <GlobalStyles />
        { element }
    </ScreenSizeProvider>
);
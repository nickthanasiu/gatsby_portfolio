import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ScreenSizeProvider } from '~context/screenSizeContext';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        /* Google Fonts import */
        @import url('https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700&display=swap');

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
        font-family: 'Cabin', sans-serif;
        font-weight: 700;
        color: #fff;
    }

    p, span, footer, div {
        font-family: 'Cabin', sans-serif;
        color: #fff;
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
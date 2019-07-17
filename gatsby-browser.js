import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ScreenSizeProvider } from '~context/screenSizeContext';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans');
        font-size: 16px;
        margin: 0;
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
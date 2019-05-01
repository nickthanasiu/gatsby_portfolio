import React from 'react';

import { ScreenSizeProvider } from '~context/screenSizeContext';

export const wrapRootElement = ({ element }) => (
    <ScreenSizeProvider>
        { element }
    </ScreenSizeProvider>
);
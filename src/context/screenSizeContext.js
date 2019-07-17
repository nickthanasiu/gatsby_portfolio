import React, { Component } from 'react';
import throttle from 'lodash.throttle';

const ScreenSizeContext = React.createContext();

export class ScreenSizeProvider extends Component {
    constructor() {
        super();

        this.state = {
            isMobile: false,
            isTablet: false,
        };

        this.throttledHandleWindowResize = throttle(this.handleWindowResize, 200);
    }

    handleWindowResize = () => {
        this.setState({
            isMobile: window.innerWidth < 768,
            isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.throttledHandleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledHandleWindowResize);
    }

    render() {
        const { isMobile, isTablet } = this.state;
        return (
            <ScreenSizeContext.Provider value={{ isMobile, isTablet }}>
                { this.props.children }
            </ScreenSizeContext.Provider>
        );
    }
}

export const ScreenSizeConsumer = ScreenSizeContext.Consumer;
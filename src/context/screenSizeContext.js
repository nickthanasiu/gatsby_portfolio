import React, { Component } from 'react'
import { filterByDotPaths } from 'graphql-compose';

const ScreenSizeContext = React.createContext();

export default class ScreenSizeProvider extends Component {
    state = {
        screenWidth: window.innerWidth,
        phone: 376,
        tablet: 615,
        laptop: 825,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () =>
        this.setState({ screenWidth: window.innerWidth })

    render() {
        return (
            <ScreenSizeContext.Provider value={state}>
                { this.props.children }
            </ScreenSizeContext.Provider>
        );
    }
}

export const ScreenSizeConsumer = ScreenSizeContext.Consumer;
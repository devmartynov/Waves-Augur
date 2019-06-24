import React from 'react';

import {store} from 'components';
import {setWidth} from 'actions/screen';

export default () => WrappedComponent => class ScreenWatcherHoc extends React.PureComponent {

    static WrappedComponent = WrappedComponent;

    /**
     * Proxy real name, prop types and default props for storybook
     */
    static displayName = WrappedComponent.displayName || WrappedComponent.name;

    constructor() {
        super(...arguments);

        this._onResize = this._onResize.bind(this);
    }

    componentWillMount() {
        this._onResize();
        window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize);
    }

    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }

    _onResize() {
        store.dispatch(setWidth(window.innerWidth));
    }

};

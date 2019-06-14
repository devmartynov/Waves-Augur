import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './AboutPage.scss';

const bem = html.bem('AboutPage');

export default class AboutPage extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <section className={bem.block()}>
                AboutPage page
            </section>
        );
    }
}

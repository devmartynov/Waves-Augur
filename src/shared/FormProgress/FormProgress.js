import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';


import './ProfileBlock.scss';

export default class FormProgress extends React.PureComponent {

    static propTypes = {

    };

    constructor() {
        super(...arguments);

        this.state = {
        }
    }


    render() {
        return (
            <div className={bem.block()}>
                FormProgress
            </div>
        );
    }
}

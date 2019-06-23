import React from 'react';
import PropTypes from 'prop-types';
import _times from 'lodash-es/times';
import {html} from 'components';

import './FormProgress.scss';
const bem = html.bem('FormProgress');

export default class FormProgress extends React.PureComponent {

    static propTypes = {
        stepCount: PropTypes.number,
        step: PropTypes.number,
    };

    constructor() {
        super(...arguments);

        this.state = {
            step: this.props.step,
        };
    }


    render() {
        return (
            <div className={bem.block()}>
                {_times(this.props.stepCount).map((item, index) => (
                    <div
                        key={index}
                        className={bem.element('item', {
                            first: index === 1,
                            filled: index <= this.state.step,
                        })}
                    />
                ))}
            </div>
        );
    }
}

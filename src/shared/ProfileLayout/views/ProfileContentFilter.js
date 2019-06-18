import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _get from 'lodash-es/get';
import Link from 'ui/nav/Link';

import {html} from 'components';
import Nav from 'ui/nav/Nav';

import './ProfileContentFilter.scss';
import Layout from "shared/Layout";

const bem = html.bem('ProfileContentFilter');

@connect()
export default class ProfileContentFilter extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.array,
    };

    render() {
        return (
            <div className={bem.block()}>
                {this.renderNav()}
                {this.props.children}
            </div>
        );
    }

    renderNav() {
        if (!this.props.navItems || this.props.navItems.length === 0) {
            return null;
        }

        return (
            <div className={bem.element('nav')}>
                {this.props.navItems.map(item => (
                    <span className={bem.element('nav-item', {
                        'is-active': item.isActive,
                    })}>
                        <Link
                            label={item.title}
                            to={item.url}
                        />
                    </span>
                ))}
            </div>
        );
    }
}

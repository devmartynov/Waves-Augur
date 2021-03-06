import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _get from 'lodash-es/get';

import {ui} from 'components';
import {setPageSize} from '../../../actions/list';

export default
@connect()
class PaginationSize extends React.PureComponent {

    static propTypes = {
        listId: PropTypes.string,
        sizes: PropTypes.arrayOf(PropTypes.number),
        list: PropTypes.shape({
            pageSize: PropTypes.number,
        }),
        className: PropTypes.string,
        view: PropTypes.func,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
    };

    static defaultProps = {
        sizes: [30, 50, 100],
        className: '',
        size: 'sm'
    };

    constructor() {
        super(...arguments);

        this._onSelect = this._onSelect.bind(this);
    }

    render() {
        const PaginationSizeView = this.props.view || ui.getView('list.PaginationSizeView');
        return (
            <PaginationSizeView
                {...this.props}
                sizes={this.props.sizes.map(size => ({
                    size,
                    label: size,
                    isActive: _get(this.props, 'list.pageSize') === size,
                }))}
                onSelect={this._onSelect}
            />
        );
    }

    _onSelect(size) {
        this.props.dispatch(setPageSize(this.props.listId, size));
    }

}
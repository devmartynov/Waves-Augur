import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';

import {ui} from 'components';
import listHoc from '../listHoc';

export default
@listHoc()
class Accordion extends React.PureComponent {

    static propTypes = {
        primaryKey: PropTypes.string,
        items: PropTypes.array,
        itemView: PropTypes.func.isRequired,
        itemProps: PropTypes.object,
        headerView: PropTypes.func.isRequired,
        headerProps: PropTypes.object,
        headerLabelAttribute: PropTypes.string,
        view: PropTypes.func,
        openFirst: PropTypes.bool,
        openedId: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        onToggle: PropTypes.func,
    };

    static defaultProps = {
        openFirst: true,
    };

    constructor() {
        super(...arguments);

        this._renderItem = this._renderItem.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._onToggle = this._onToggle.bind(this);

        this.state = {
            openedId: this.props.openedId || (
                this.props.openFirst
                    ? _get(this.props, ['items', '0', this.props.primaryKey]) || 0
                    : null
            ),
        };
    }

    componentDidMount() {
        if (this.props.onToggle && this.state.openedId) {
            this.props.onToggle(this.state.openedId);
        }
    }

    render() {
        const AccordionView = this.props.view || ui.getView('list.AccordionView');
        return (
            <AccordionView
                {...this.props}
                renderHeader={this._renderHeader}
                renderItem={this._renderItem}
                openedId={this.state.openedId}
                onToggle={this._onToggle}
                items={this.props.items.map((item, index) => {
                    const id = _get(item, this.props.primaryKey) || index;
                    return {
                        ...item,
                        id,
                        isOpened: this.state.openedId === id,
                    };
                })}
            />
        );
    }

    _renderHeader(item, index) {
        const AccordionItemHeaderView = this.props.headerView || ui.getView('list.AccordionItemHeaderView');
        return this._renderItemInternal(item, index, AccordionItemHeaderView, this.props.headerProps);
    }

    _renderItem(item, index) {
        return this._renderItemInternal(item, index, this.props.itemView, this.props.itemProps);
    }

    _renderItemInternal(item, index, ItemView, itemProps) {
        return (
            <ItemView
                {...this.props}
                {...itemProps}
                id={item.id}
                item={item}
                index={index}
                isOpened={item.isOpened}
            />
        );
    }

    _onToggle(item) {
        const openedId = this.state.openedId === item.id ? null : item.id;
        if (this.props.onToggle) {
            this.props.onToggle(item, !!openedId);
        }
        this.setState({openedId});
    }
}

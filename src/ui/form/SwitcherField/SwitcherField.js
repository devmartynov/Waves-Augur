import React from 'react';
import PropTypes from 'prop-types';

import {ui} from 'components';
import fieldHoc from '../fieldHoc';
import dataProviderHoc from '../dataProviderHoc';

export default
@fieldHoc({
    componentId: 'form.SwitcherField',
})
@dataProviderHoc()
class SwitcherField extends React.PureComponent {

    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        hint: PropTypes.string,
        attribute: PropTypes.string,
        input: PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.any,
            onChange: PropTypes.func,
        }),
        required: PropTypes.bool,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        className: PropTypes.string,
        view: PropTypes.func,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.bool,
            ]),
            label: PropTypes.string,
        })),
        buttonProps: PropTypes.object,
    };

    static defaultProps = {
        disabled: false,
        required: false,
        className: '',
        errors: [], //for storybook
    };

    render() {
        const SwitcherFieldView = this.props.view || ui.getView('form.SwitcherFieldView');
        return (
            <SwitcherFieldView
                {...this.props}
                items={this.props.items.map(item => ({
                    ...item,
                    isSelected: !!this.props.selectedItems.find(selectedItem => selectedItem.id === item.id),
                    isHovered: this.props.hoveredItem && this.props.hoveredItem.id === item.id,
                }))}
                onItemClick={this.props.onItemClick}
            />
        );
    }

}

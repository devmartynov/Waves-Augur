import React from 'react';
import InputField from 'ui/form/InputField';
import Button from 'ui/form/Button/Button';
import SvgIcon from 'components/global/common/SvgIcon';


import { html } from 'components';
const bem: any = html.bem('AboutTab');

const AboutTab: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {

    return (
        <div {...props} className={bem.block()}>
            <h3>About tab</h3>
            <span>Add More Information about yourself</span>
            <div className={bem.element('grid')}>
                
            </div>
        </div>
    );
}

export default AboutTab;
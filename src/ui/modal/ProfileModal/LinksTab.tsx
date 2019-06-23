import React from 'react';
import InputField from 'ui/form/InputField';
import Button from 'ui/form/Button/Button';
import SvgIcon from 'components/global/common/SvgIcon';

import { html } from 'components';
const bem: any = html.bem('LinksTab');

import './ProfileModal.scss';

const LinksTab: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const placeholder = "Enter URL";

    return (
        <div {...props} className={bem.block()}>
            <h3>Links</h3>
            <span>Connect With Your Social Media To Get More Coverage</span>
            <div className={bem.element('grid')}>
                <span>Twitter</span>
                <InputField placeholder={placeholder}/>
                <span>Facebook</span>
                <InputField placeholder={placeholder}/>
                <span>Linkedin</span>
                <InputField placeholder={placeholder}/>
                <span>Telegram</span>
                <InputField placeholder={placeholder}/>
                <span>Your website</span>
                <InputField placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default LinksTab;